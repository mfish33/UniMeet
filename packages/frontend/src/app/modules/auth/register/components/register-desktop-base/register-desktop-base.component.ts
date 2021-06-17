import {trigger, transition } from '@angular/animations';
import { Component, isDevMode, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth.service';
import { RegistrationForm } from '../../models/RegistrationForm';
import { SlidingCardComponent } from '../sliding-card/sliding-card.component';
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
export class RegisterDesktopBaseComponent {

  public pages = RegistrationForm
  public pagesIndex = 0
  public animationState: number;
  
  private currentPageSubscription:Subscription

  constructor(
    private router:Router,
    private route: ActivatedRoute,
    private auth: AuthService,
    private messageService:MessageService
  ) {
    if(isDevMode()) {
      // USED FOR LIVE RELOAD
      // HAD TO BE PUT IN THE CONSTRUCTOR BECAUSE IT WAS RUNNING ROUTER EVENT BEFORE INIT
      let [,currentRoute] = window.location.href.match(/\/register\/(.+)/)
      if(route) {
        let i = this.pages.findIndex(p => p.path == currentRoute)
        this.pagesIndex = i != -1 ? i : 0
      }
    }
  }

  private async register() {
    try {
      await this.auth.register(this.pages)
      this.messageService.add({
        severity:'success',
        summary:'Please confirm your email',
        detail:'An email has been sent to your school email'
      })
      this.router.navigateByUrl('')
    } catch(e) {
      this.messageService.add({
        severity:'error',
        summary:'Error creating acount',
        detail:e
      })
    }
  }

  onActivate(elementRef: SlidingCardComponent) {
    this.animationState = this.route.firstChild.snapshot.data['routeIdx'];
    // This is here for the first load when currentPageSubscription is undifined
    if(this.currentPageSubscription) {
      this.currentPageSubscription.unsubscribe()
    }
    this.currentPageSubscription = elementRef.routingEvents.subscribe((event:number) => {
      // Signals that we clicked through past the final panel
      if(event + this.pagesIndex == this.pages.length) {
        return this.register()
      }
      this.pagesIndex += event
      this.router.navigate(['/','register',this.pages[this.pagesIndex].path])
    });
    // Setup component inputs
    if(this.pagesIndex == this.pages.length - 1) {
      // Set both button states to false to signal that we are at the end of the pages
      elementRef.buttonState = [false, false]
    } else {
      elementRef.buttonState = [!!this.pages[this.pagesIndex - 1], !!this.pages[this.pagesIndex + 1]]
    }
    elementRef.form = this.pages[this.pagesIndex].form
  }

}

