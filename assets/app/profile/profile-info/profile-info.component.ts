import { User } from './../../shared/models/user.models';
import { AuthService } from './../../shared/services/auth.service';
import { NotificationService } from './../../shared/notification/notification.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
    selector: 'app-profile-info',
    templateUrl: './profile-info.component.html'
})
export class ProfileInfoComponent {

    formProfile: FormGroup;

    constructor(private authService: AuthService, 
                private notificationService: NotificationService) {}

    ngOnInit() {
        this.formProfile = new FormGroup({
            firstName: new FormControl(null, Validators.required),
            lastName: new FormControl(null, Validators.required)
        });

        this.authService.info().subscribe(
          (data) => {
            this.formProfile.controls['firstName'].setValue(data.obj.firstName);
            this.formProfile.controls['lastName'].setValue(data.obj.lastName);
          }
        );
    }

    onSubmit() {
      const user = new User('', '', this.formProfile.value.firstName, this.formProfile.value.lastName, '');
      this.authService.update(user)
        .subscribe(
          (data) => {
            this.notificationService.handleNotification(data.message, 'success');
          },
          (error) => this.notificationService.handleNotification(error.title, 'danger')
        );
    }
}