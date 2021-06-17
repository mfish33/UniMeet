import { Component } from '@angular/core';
import { SlidingCardComponent } from '../sliding-card/sliding-card.component';
import { majors } from './majors';


@Component({
  selector: 'app-desktop-get-to-know-you',
  templateUrl: './desktop-get-to-know-you.component.html',
  styleUrls: ['./desktop-get-to-know-you.component.scss']
})
export class DesktopGetToKnowYouComponent extends SlidingCardComponent {

  public collegeMajors = majors
  public gradYears = (new Array(5).fill(null)).map((_, i) => ({name: (new Date().getFullYear()) + i}))
  public dropdownStyle = {
    'width':'100%',
    'min-width':'100%',
    'border-radius':'10px'
  }

}
