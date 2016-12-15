import { AuthGuard } from './../shared/guards/auth.guard';
import { Routes, RouterModule } from '@angular/router';

import { ProfileComponent } from './profile.component';

const PROFILE_ROUTES : Routes = [
  { path: '', component: ProfileComponent, canActivate: [AuthGuard] }
];

export const profileRouting = RouterModule.forChild(PROFILE_ROUTES);