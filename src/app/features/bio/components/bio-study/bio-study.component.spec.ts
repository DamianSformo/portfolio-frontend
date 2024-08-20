import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BioStudyComponent } from './bio-study.component';

describe('BioStudyComponent', () => {
  let component: BioStudyComponent;
  let fixture: ComponentFixture<BioStudyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BioStudyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BioStudyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
