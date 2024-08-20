import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BioBioComponent } from './bio-bio.component';

describe('BioBioComponent', () => {
  let component: BioBioComponent;
  let fixture: ComponentFixture<BioBioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BioBioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BioBioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
