import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NOHSCOPComponent } from './nohscop.component';

describe('NOHSCOPComponent', () => {
  let component: NOHSCOPComponent;
  let fixture: ComponentFixture<NOHSCOPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NOHSCOPComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NOHSCOPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
