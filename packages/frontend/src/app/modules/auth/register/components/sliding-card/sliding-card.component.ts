import { Component, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { registrationButtonState } from 'src/app/shared/models/registrationButtonState';

@Component({
  selector: 'app-sliding-card',
  template: '',
  styles: []
})
export class SlidingCardComponent {

  @Input() public buttonState:registrationButtonState
  @Input() public form:FormGroup
  @Output() public routingEvents:BehaviorSubject<number> = new BehaviorSubject(0)

}
