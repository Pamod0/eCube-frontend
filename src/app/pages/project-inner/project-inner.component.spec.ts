import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectInnerComponent } from './project-inner.component';

describe('ProjectInnerComponent', () => {
  let component: ProjectInnerComponent;
  let fixture: ComponentFixture<ProjectInnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectInnerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectInnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
