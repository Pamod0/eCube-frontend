import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CycloneRCMComponent } from './cyclone-rcm.component';

describe('CycloneRCMComponent', () => {
  let component: CycloneRCMComponent;
  let fixture: ComponentFixture<CycloneRCMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CycloneRCMComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CycloneRCMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
