import { TestBed } from '@angular/core/testing';

import { AddclientesService } from './addclientes.service';

describe('AddclientesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddclientesService = TestBed.get(AddclientesService);
    expect(service).toBeTruthy();
  });
});
