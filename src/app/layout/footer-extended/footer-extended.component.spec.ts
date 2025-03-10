import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterExtendedComponent } from './footer-extended.component';

describe('FooterExtendedComponent', () => {
  let component: FooterExtendedComponent;
  let fixture: ComponentFixture<FooterExtendedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterExtendedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterExtendedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
