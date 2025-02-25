import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebDesignServiceComponent } from './web-design-service.component';

describe('WebDesignServiceComponent', () => {
  let component: WebDesignServiceComponent;
  let fixture: ComponentFixture<WebDesignServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebDesignServiceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebDesignServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
