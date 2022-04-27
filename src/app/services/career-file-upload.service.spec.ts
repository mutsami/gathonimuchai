import { TestBed } from '@angular/core/testing';

import { CareerFileUploadService } from './career-file-upload.service';

describe('CareerFileUploadService', () => {
  let service: CareerFileUploadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CareerFileUploadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
