import { Component, OnInit, ViewChild, ElementRef, Input, HostListener } from '@angular/core';
import sizer from 'image-sizer'

@Component({
  selector: 'app-background-image',
  templateUrl: './background-image.component.html',
  styleUrls: ['./background-image.component.scss']
})
export class BackgroundImageComponent implements OnInit {

  constructor() { }

  public backgroundRatio:number
  public windowRatio:number
  @ViewChild('background') backgroundImage: ElementRef
  @Input() src: string
  @Input() centered:boolean
  public offset = 0

  async ngOnInit(): Promise<void> {
    const imgRes = await fetch(this.src)
    const imgArrayBuffer = await imgRes.arrayBuffer()
    const imgDims = sizer(imgArrayBuffer)
    this.backgroundRatio = imgDims.width / imgDims.height
    this.onResize()
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.windowRatio = window.innerWidth / window.innerHeight
    if(this.centered && this.windowRatio < this.backgroundRatio) {
      let imgWidth = this.backgroundRatio * window.innerHeight
      this.offset = Math.round((imgWidth - window.innerWidth) / 2)
    } else {
      this.offset = 0
    }
  }

}