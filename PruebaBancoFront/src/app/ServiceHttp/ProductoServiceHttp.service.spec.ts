/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ProductoServiceHttpService } from './ProductoServiceHttp.service';

describe('Service: ProductoServiceHttp', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductoServiceHttpService]
    });
  });

  it('should ...', inject([ProductoServiceHttpService], (service: ProductoServiceHttpService) => {
    expect(service).toBeTruthy();
  }));
});
