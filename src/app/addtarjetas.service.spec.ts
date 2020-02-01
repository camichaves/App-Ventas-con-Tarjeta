import { TestBed } from '@angular/core/testing';

import { AddtarjetasService } from './addtarjetas.service';

describe('AddtarjetasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddtarjetasService = TestBed.get(AddtarjetasService);
    expect(service).toBeTruthy();
  });
});
