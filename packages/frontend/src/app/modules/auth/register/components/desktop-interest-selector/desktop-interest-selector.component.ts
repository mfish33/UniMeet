import { Component, ElementRef, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { registrationButtonState } from 'src/app/shared/models/registrationButtonState';
import { availableInterests } from './Interests';

@Component({
  selector: 'app-desktop-interest-selector',
  templateUrl: './desktop-interest-selector.component.html',
  styleUrls: ['./desktop-interest-selector.component.scss']
})
export class DesktopInterestSelectorComponent implements OnInit {
  
  @Output() public routingEvents:BehaviorSubject<number> = new BehaviorSubject(0)
  @Input() public buttonState:registrationButtonState
  @Input() public form:FormGroup
  @ViewChild('selectedContainer') public selectedContainer:ElementRef
  public filter:string = ''
  public availableInterests = availableInterests
  public availableInterestsSubject:BehaviorSubject<string[]> = new BehaviorSubject(this.availableInterests)
  public availableInterests$ = this.availableInterestsSubject
  .pipe(map(interests => {
    return interests.filter(interest => interest.toLocaleLowerCase().includes(this.filter.toLocaleLowerCase()))
  }))

  constructor() { }

  ngOnInit(): void {
    this.populateData()
  }

  public selectInterest(interest:string) {
    let index = this.availableInterests.indexOf(interest)
    this.availableInterests.splice(index,1)
    let selectedInterests:string[] = this.form.value.selectedInterests
    selectedInterests.push(interest)
    this.form.setValue({
      selectedInterests
    })
    this.filter = ''
    this.populateData()
  }

  public removeInterest(index:number) {
    let selectedInterests:string[] = this.form.value.selectedInterests
    let interest = selectedInterests[index]
    selectedInterests.splice(index,1)
    this.availableInterests.push(interest)
    this.form.setValue({
      selectedInterests
    })
    this.populateData()
  }

  public populateData() {
    this.availableInterestsSubject.next(this.availableInterests)
  }

  public captureHorizontalSelected(event: WheelEvent): void {
    this.selectedContainer.nativeElement.scrollLeft += event.deltaY / 2;
    event.preventDefault();
  } 

}
