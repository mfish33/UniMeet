import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BioAndProfileComponent } from './bio-and-profile.component';

describe('BioAndProfileComponent', () => {
  let component: BioAndProfileComponent;
  let fixture: ComponentFixture<BioAndProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BioAndProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BioAndProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
