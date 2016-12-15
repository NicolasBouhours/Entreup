import { ProfileComponent } from './dashboard/profile.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './layout/home/home.component';
import { AuthGuard } from './shared/guards/auth.guard';
import { ProfileContainerComponent } from './profile/container/profile-container.component';
import { RouterModule, Routes } from '@angular/router';



const APP_ROUTES: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'dashboardprofile', component: ProfileComponent },
    { path: 'auth', loadChildren: './auth/auth.module#AuthModule' },
    { path: 'profile', component: ProfileContainerComponent, canActivate: [AuthGuard], loadChildren: './profile/profile.module#ProfileModule' }
];

export const routing = RouterModule.forRoot(APP_ROUTES);