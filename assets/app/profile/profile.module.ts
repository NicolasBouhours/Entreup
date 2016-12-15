import { ProfileComponent } from './profile.component';
import { profileRouting } from './profile.routing';
import { ProfileLocationComponent } from './profile-location/profile-location.component';
import { ProfileInfoComponent } from './profile-info/profile-info.component';
import { ProfilePictureComponent } from './profile-picture/profile-picture.component';
import { ImageComponent } from './../shared/image/image.component';
import { ProfilePasswordComponent } from './profile-password/profile-password.component';
import { NgModule } from '@angular/core';
import { SharedModule } from './../shared/shared.module';

@NgModule({
  declarations: [
    ProfileComponent,
    ProfilePasswordComponent,
    ProfilePictureComponent,
    ProfileInfoComponent,
    ProfileLocationComponent,
    ImageComponent
  ],
  imports: [
    SharedModule,
    profileRouting
  ]
})
export class ProfileModule {

}