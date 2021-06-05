import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterDesktopBaseComponent } from './register-desktop-base.component';

describe('RegisterDesktopBaseComponent', () => {
  let component: RegisterDesktopBaseComponent;
  let fixture: ComponentFixture<RegisterDesktopBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterDesktopBaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterDesktopBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
