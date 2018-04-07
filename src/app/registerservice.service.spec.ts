import { TestBed, inject } from '@angular/core/testing';

import { RegisterserviceService } from './registerservice.service';

describe('RegisterserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RegisterserviceService]
    });
  });

  it('should be created', inject([RegisterserviceService], (service: RegisterserviceService) => {
    expect(service).toBeTruthy();
  }));
});
