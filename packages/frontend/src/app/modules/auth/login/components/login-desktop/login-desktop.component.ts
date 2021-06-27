import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login-desktop',
  templateUrl: './login-desktop.component.html',
  styleUrls: ['./login-desktop.component.scss']
})
export class LoginDesktopComponent implements OnInit {

  public form = new FormGroup({
    email:new FormControl(''),
    password:new FormControl('')
  })

  constructor() { }

  ngOnInit(): void {
  }

  public login() {
    
  }

}
