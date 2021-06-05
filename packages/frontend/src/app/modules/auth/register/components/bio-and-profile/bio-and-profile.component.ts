import { Component, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { registrationButtonState } from 'src/app/shared/models/registrationButtonState';

@Component({
  selector: 'app-bio-and-profile',
  templateUrl: './bio-and-profile.component.html',
  styleUrls: ['./bio-and-profile.component.scss']
})
export class BioAndProfileComponent implements OnInit {

  @Output() public routingEvents:BehaviorSubject<number> = new BehaviorSubject(0)
  @Input() public buttonState:registrationButtonState
  @Input() public form:FormGroup
  public bioLength:Observable<number>
  public MAX_BIO_SIZE:number = 300

  public imageBlob:File
  public photoConfirmed = false

  constructor() { }

  ngOnInit(): void {
    if(this.form.value['profileImage']) {
      this.photoConfirmed = true
      this.imageBlob = this.form.value['originalImage']
    }
    this.bioLength = this.form.get('bio').valueChanges.pipe(map((s:string) => s.length))
  }

  dragEvent(event: any): void {
    let file:File = event.item(0)
    if(!file.type.includes('png')) {
      return
    }
    this.form.get('originalImage').setValue(file)
    this.imageBlob = file;
  }

  imageCropped(event: ImageCroppedEvent) {
      this.form.get('profileImage').setValue(event.base64)
  }
}
