import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesktopInterestSelectorComponent } from './desktop-interest-selector.component';

describe('DesktopIntrestSelectorComponent', () => {
  let component: DesktopInterestSelectorComponent;
  let fixture: ComponentFixture<DesktopInterestSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesktopInterestSelectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DesktopInterestSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
