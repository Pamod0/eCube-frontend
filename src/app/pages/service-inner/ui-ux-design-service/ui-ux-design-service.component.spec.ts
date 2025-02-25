import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiUxDesignServiceComponent } from './ui-ux-design-service.component';

describe('UiUxDesignServiceComponent', () => {
  let component: UiUxDesignServiceComponent;
  let fixture: ComponentFixture<UiUxDesignServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiUxDesignServiceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiUxDesignServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
