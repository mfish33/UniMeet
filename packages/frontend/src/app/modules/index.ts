import { AboutModule } from './about/about.module'
import { LoginModule } from './auth/login/login.module'
import { RegisterModule } from './auth/register/register.module'
import { HomeModule } from './home/home.module'

export const modules = [
    AboutModule,
    RegisterModule,
    HomeModule,
    LoginModule
]