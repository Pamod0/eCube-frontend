import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SLBasketballComponent } from './sl-basketball.component';

describe('SLBasketballComponent', () => {
  let component: SLBasketballComponent;
  let fixture: ComponentFixture<SLBasketballComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SLBasketballComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SLBasketballComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
