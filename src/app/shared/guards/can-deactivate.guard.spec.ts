import { TestBed } from '@angular/core/testing';

import { CanDeactivateGuard } from './can-deactivate.guard';
import createSpyObj = jasmine.createSpyObj;

describe('CanDeactivateGuard', () => {
  let guard: CanDeactivateGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CanDeactivateGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
  it('should call canDeactivate from component', () => {
    const componentMock = createSpyObj('Component', ['canDeactivate']);

    guard.canDeactivate(componentMock);
    expect(componentMock['canDeactivate']).toHaveBeenCalledTimes(1);
  });
});
