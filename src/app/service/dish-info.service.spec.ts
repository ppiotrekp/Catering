import { TestBed } from '@angular/core/testing';

import { DishInfoService } from './dish-info.service';

describe('DishInfoService', () => {
  let service: DishInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DishInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
