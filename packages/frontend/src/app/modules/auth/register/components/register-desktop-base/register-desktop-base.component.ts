import {trigger, transition } from '@angular/animations';
import { Component, isDevMode, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RegistrationForm } from '../../models/RegistrationForm';
import { right, left } from './animations';

@Component({
  selector: 'app-register-desktop-base',
  templateUrl: './register-desktop-base.component.html',
  styleUrls: ['./register-desktop-base.component.scss'],
  animations: [
    trigger('animRoutes', [
      transition(':increment', right),
      transition(':decrement', left),
    ]),
  ],
})
export class RegisterDesktopBaseComponent implements OnInit {

  public pages = RegistrationForm
  public pagesIndex = 0
  public animationState: number;

  constructor(
    private router:Router,
    private route: ActivatedRoute
  ) {
    if(isDevMode()) {
      // USED FOR LIVE RELOAD
      // HAD TO BE PUT IN THE CONSTRUCTOR BECAUSE IT WAS RUNNING ROUTER EVENT BEFORE INIT
      let [,currentRoute] = window.location.href.match(/\/register\/(.+)/)
      if(route) {
        let i = this.pages.findIndex(p => p.route == currentRoute)
        this.pagesIndex = i != -1 ? i : 0
      }
    }
  }

  ngOnInit(): void {

  }

  onActivate(elementRef) {
    this.animationState = this.route.firstChild.snapshot.data['routeIdx'];
    elementRef.routingEvents.subscribe((event:number) => {
      this.pagesIndex += event
      this.router.navigate(['/','register',this.pages[this.pagesIndex].route])
    });
    elementRef.buttonState = [!!this.pages[this.pagesIndex - 1], !!this.pages[this.pagesIndex + 1]]
    elementRef.form = this.pages[this.pagesIndex].form
  }

}

