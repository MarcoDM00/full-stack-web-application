import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IsempliceComponent } from './isemplice.component';

describe('IsempliceComponent', () => {
  let component: IsempliceComponent;
  let fixture: ComponentFixture<IsempliceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IsempliceComponent]
    });
    fixture = TestBed.createComponent(IsempliceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
