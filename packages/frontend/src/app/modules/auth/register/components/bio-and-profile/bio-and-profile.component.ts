import { Component, OnInit } from '@angular/core';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SlidingCardComponent } from '../sliding-card/sliding-card.component';

@Component({
  selector: 'app-bio-and-profile',
  templateUrl: './bio-and-profile.component.html',
  styleUrls: ['./bio-and-profile.component.scss']
})
export class BioAndProfileComponent extends SlidingCardComponent implements OnInit  {

  public bioLength:Observable<number>
  public MAX_BIO_SIZE:number = 300

  public imageBlob:File
  public photoConfirmed = false

  ngOnInit(): void {
    if(this.form.value['profileImage']) {
      this.photoConfirmed = true
      this.imageBlob = this.form.value['originalImage']
    }
    this.bioLength = this.form.get('bio').valueChanges.pipe(map((s:string) => s.length))
  }

  public dragEvent(event: any, browse = false): void {
    let files = browse ? event.target.files : event
    let file:File = files.item(0)
    if(!file.type.includes('png')) {
      return
    }
    this.form.get('originalImage').setValue(file)
    this.imageBlob = file;
  }

  public imageCropped(event: ImageCroppedEvent) {
      this.form.get('profileImage').setValue(event.base64)
  }
}
