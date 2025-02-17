import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BouncingGlowComponent } from './bouncing-glow.component';

describe('BouncingGlowComponent', () => {
  let component: BouncingGlowComponent;
  let fixture: ComponentFixture<BouncingGlowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BouncingGlowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BouncingGlowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
