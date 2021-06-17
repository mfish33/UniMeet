import { FormControl, FormGroup } from "@angular/forms";
import { BioAndProfileComponent } from "../components/bio-and-profile/bio-and-profile.component";
import { DesktopGetToKnowYouComponent } from "../components/desktop-get-to-know-you/desktop-get-to-know-you.component";
import { DesktopInterestSelectorComponent } from "../components/desktop-interest-selector/desktop-interest-selector.component";
import { SlidingCardComponent } from "../components/sliding-card/sliding-card.component";
import { SocialMediasComponent } from "../components/social-medias/social-medias.component";


export interface RegistrationFormRoute {
  path:string,
  component:typeof SlidingCardComponent,
  form:FormGroup
}


export const RegistrationForm:RegistrationFormRoute[] = [
  {
    path:'info',
    component: DesktopGetToKnowYouComponent,
    form:new FormGroup({
      name: new FormControl(''),
      major: new FormControl(''),
      password: new FormControl(''),
      confirmPassword: new FormControl(''),
      email: new FormControl(''),
      gradYear: new FormControl(''),
    })
  },
  {
    path:'interests',
    component: DesktopInterestSelectorComponent,
    form:new FormGroup({
      selectedInterests:new FormControl([])
    })
  },
  {
    path:'about',
    component: BioAndProfileComponent,
    form:new FormGroup({
      bio: new FormControl(''),
      profileImage: new FormControl(''),
      originalImage:new FormControl()
    })
  },
  {
    path:'social-medias',
    component: SocialMediasComponent,
    form:new FormGroup({
      instagram: new FormControl(''),
      twitter: new FormControl(''),
      snapchat: new FormControl(''),
      whatsApp: new FormControl(''),
      tikTok: new FormControl(''),
      linkedIn: new FormControl(''),
    })
  }
]