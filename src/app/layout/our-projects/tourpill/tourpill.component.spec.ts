import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TourpillComponent } from './tourpill.component';

describe('TourpillComponent', () => {
  let component: TourpillComponent;
  let fixture: ComponentFixture<TourpillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TourpillComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TourpillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
