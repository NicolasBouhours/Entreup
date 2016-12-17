import { AppContainerComponent } from './layout/app-container/app-container.component';
import { ProfileComponent } from './profile/profile.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './layout/home/home.component';
import { AuthGuard } from './shared/guards/auth.guard';
import { RouterModule, Routes } from '@angular/router';



const APP_ROUTES: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'dashboard', component: AppContainerComponent, canActivate: [AuthGuard], loadChildren: './dashboard/dashboard.module#DashboardModule' },
    { path: 'auth', loadChildren: './auth/auth.module#AuthModule' },
    { path: 'profile', component: AppContainerComponent, canActivate: [AuthGuard], loadChildren: './profile/profile.module#ProfileModule' }
];

export const routing = RouterModule.forRoot(APP_ROUTES);