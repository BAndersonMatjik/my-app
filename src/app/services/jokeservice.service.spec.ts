import { TestBed } from '@angular/core/testing';

import { JokeserviceService } from './jokeservice.service';

describe('JokeserviceService', () => {
  let service: JokeserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JokeserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
