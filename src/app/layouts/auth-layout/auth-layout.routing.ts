import { Routes } from '@angular/router';

import { LandingComponent } from '../../pages/landing/landing.component';
import { LoginComponent } from '../../pages/login/login.component';
import { RegisterComponent } from '../../pages/register/register.component';

export const AuthLayoutRoutes: Routes = [
    { path: 'home',          component: LandingComponent },
    { path: 'login',          component: LoginComponent },
    { path: 'register',       component: RegisterComponent }
];
