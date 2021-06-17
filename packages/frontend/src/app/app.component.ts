import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from './core/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private auth:AuthService, private route: ActivatedRoute){}
  title = 'social circle';

  ngOnInit() {
    document.addEventListener('DOMContentLoaded',() => {
      let autoSignInkey = this.route.snapshot.queryParamMap.get('key')
      if(autoSignInkey) {
        this.auth.verifyEmailLogIn(autoSignInkey)
      }
    })

  }
}