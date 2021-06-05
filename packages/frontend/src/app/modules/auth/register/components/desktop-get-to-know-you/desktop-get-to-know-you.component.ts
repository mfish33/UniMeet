import { Component, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { registrationButtonState } from 'src/app/shared/models/registrationButtonState';
import { majors } from './majors';


@Component({
  selector: 'app-desktop-get-to-know-you',
  templateUrl: './desktop-get-to-know-you.component.html',
  styleUrls: ['./desktop-get-to-know-you.component.scss']
})
export class DesktopGetToKnowYouComponent implements OnInit {

  @Output() public routingEvents:BehaviorSubject<number> = new BehaviorSubject(0)
  @Input() public buttonState:registrationButtonState
  @Input() public form:FormGroup
  public collegeMajors = majors
  public gradYears = (new Array(5).fill(null)).map((_, i) => ({name: (new Date().getFullYear()) + i}))
  public dropdownStyle = {
    'width':'100%',
    'min-width':'100%',
    'border-radius':'10px'
  }

  constructor() { }

  ngOnInit(): void {}

}
