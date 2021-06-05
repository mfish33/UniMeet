import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesktopGetToKnowYouComponent } from './desktop-get-to-know-you.component';

describe('DesktopGetToKnowYouComponent', () => {
  let component: DesktopGetToKnowYouComponent;
  let fixture: ComponentFixture<DesktopGetToKnowYouComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesktopGetToKnowYouComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DesktopGetToKnowYouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
