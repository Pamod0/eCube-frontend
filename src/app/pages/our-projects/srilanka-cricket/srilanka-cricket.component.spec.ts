import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SrilankaCricketComponent } from './srilanka-cricket.component';

describe('SrilankaCricketComponent', () => {
  let component: SrilankaCricketComponent;
  let fixture: ComponentFixture<SrilankaCricketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SrilankaCricketComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SrilankaCricketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
