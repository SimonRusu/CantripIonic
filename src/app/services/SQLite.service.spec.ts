import { TestBed } from '@angular/core/testing';

import { SQLiteService } from './SQLite.service';

describe('DbService', () => {
  let service: SQLiteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SQLiteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});