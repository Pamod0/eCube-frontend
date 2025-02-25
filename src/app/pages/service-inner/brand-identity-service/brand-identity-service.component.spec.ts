import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandIdentityServiceComponent } from './brand-identity-service.component';

describe('BrandIdentityServiceComponent', () => {
  let component: BrandIdentityServiceComponent;
  let fixture: ComponentFixture<BrandIdentityServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrandIdentityServiceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrandIdentityServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
