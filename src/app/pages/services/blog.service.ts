import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  //make sure to set the guid in the URL, test it works in browser
  guid:string = ""
  url:string = `https://gm-blog-341411.oa.r.appspot.com/content-manager/collection-types/api::blog.blog`
  apikey:string = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjQ0OTM3NzQ3LCJleHAiOjE2NDc1Mjk3NDd9.waqUF53AH_nV1tSfK74IBk1brXzb-8cHsoNYaU6W3YU"

  constructor(private http: HttpClient) { }

  getBlogs(){
    return this.http.get(this.url, {
      headers: {
        accept: "application/json",
        Authorization: this.apikey
      }
    }).pipe(map(res => res))
  }
}
