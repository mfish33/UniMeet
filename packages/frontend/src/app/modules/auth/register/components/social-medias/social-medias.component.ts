import { Component, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { registrationButtonState } from 'src/app/shared/models/registrationButtonState';


@Component({
  selector: 'app-social-medias',
  templateUrl: './social-medias.component.html',
  styleUrls: ['./social-medias.component.scss']
})
export class SocialMediasComponent implements OnInit {

  @Output() public routingEvents:BehaviorSubject<number> = new BehaviorSubject(0)
  @Input() public buttonState:registrationButtonState
  @Input() public form:FormGroup

  constructor() { }

  ngOnInit(): void {
  }

}
