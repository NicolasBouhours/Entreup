import { AuthGuard } from './../shared/guards/auth.guard';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';

const PROFILE_ROUTES : Routes = [
  { path: '', component: DashboardComponent, canActivate: [AuthGuard] }
];

export const dashboardRouting = RouterModule.forChild(PROFILE_ROUTES);