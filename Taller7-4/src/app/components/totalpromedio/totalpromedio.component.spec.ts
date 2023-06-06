import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalpromedioComponent } from './totalpromedio.component';

describe('TotalpromedioComponent', () => {
  let component: TotalpromedioComponent;
  let fixture: ComponentFixture<TotalpromedioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TotalpromedioComponent]
    });
    fixture = TestBed.createComponent(TotalpromedioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
