import { FormControl, FormGroup } from "@angular/forms";

export const RegistrationForm:{route:string, form:FormGroup}[] = [
  {
    route:'info',
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
    route:'interests',
    form:new FormGroup({
      selectedInterests:new FormControl([])
    })
  },
  {
    route:'about',
    form:new FormGroup({
      bio: new FormControl(''),
      profileImage: new FormControl(''),
      originalImage:new FormControl()
    })
  },
  {
    route:'social-medias',
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