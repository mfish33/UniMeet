import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { SlidingCardComponent } from '../sliding-card/sliding-card.component';
import { availableInterests } from './Interests';

@Component({
  selector: 'app-desktop-interest-selector',
  templateUrl: './desktop-interest-selector.component.html',
  styleUrls: ['./desktop-interest-selector.component.scss']
})
export class DesktopInterestSelectorComponent extends SlidingCardComponent implements OnInit {
  
  @ViewChild('selectedContainer') public selectedContainer:ElementRef
  public filter:string = ''
  public availableInterests = availableInterests
  public availableInterestsSubject:BehaviorSubject<string[]> = new BehaviorSubject(this.availableInterests)
  public availableInterests$ = this.availableInterestsSubject
  .pipe(map(interests => {
    return interests.filter(interest => interest.toLocaleLowerCase().includes(this.filter.toLocaleLowerCase()))
  }))

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
