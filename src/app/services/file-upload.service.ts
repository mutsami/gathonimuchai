import { Injectable } from '@angular/core'; 
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Observable } from 'rxjs';
import { finalize, map } from 'rxjs/operators'; 
import { Blog } from '../models/blog';
import { FileUpload } from '../models/file-upload';
import { AuthService } from './auth.service';
@Injectable({
  providedIn: 'root'
})
export class FileUploadService {
  uploadsCollection!: AngularFirestoreCollection<any>;
  uploads!: Observable<any[]>;
  uploadDoc?: AngularFirestoreDocument<any>;
  private basePath = '/uploads';
  constructor(private db: AngularFirestore, private storage: AngularFireStorage,private auth:AuthService) { }
  pushFileToStorage(fileUpload: FileUpload): Observable<number | undefined> {
    const filePath = `${this.basePath}/${fileUpload.file.name}`;
    const storageRef = this.storage.ref(filePath);
    const uploadTask = this.storage.upload(filePath, fileUpload.file);
    uploadTask.snapshotChanges().pipe(
      finalize(() => {
        storageRef.getDownloadURL().subscribe(downloadURL => {
          fileUpload.url = downloadURL;
          fileUpload.name = fileUpload.file.name;
          this.saveFileData(fileUpload);
        });
      })
    ).subscribe();
    return uploadTask.percentageChanges();
  }
  private saveFileData(fileUpload: FileUpload): void { 
    const data = { 
      name: fileUpload.name, 
      url: fileUpload.url,
      uploaded: this.auth.ts
    };
    this.db.collection('uploads').add(data);
  }
  getFiles(): any { 
    this.uploadsCollection = this.db.collection('uploads', ref => ref.orderBy('uploaded'));
    return this.uploadsCollection.snapshotChanges().pipe(
      map(actions => {
      return actions.map(a => {
          const data = a.payload.doc.data() as any;
          const id = a.payload.doc.id;
          return { id, ...data };
      });
      })
  );
  }
  deleteFile(fileUpload: FileUpload): void { 
    this.deleteFileDatabase(fileUpload.id)
      .then(() => {
        this.deleteFileStorage(fileUpload.name);
      })
      .catch(error => console.log(error));
  }
  private deleteFileDatabase(key: string): Promise<void> { 
    return  this.db.doc('uploads/' + key).delete();
  }
  private deleteFileStorage(name: string): void {
    const storageRef = this.storage.ref(this.basePath);
    storageRef.child(name).delete();
  }
}