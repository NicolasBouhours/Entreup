import { User } from './../../shared/models/user.models';
import { AuthService } from './../../shared/services/auth.service';
import { NotificationService } from './../../shared/notification/notification.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
    selector: 'app-profile-password',
    templateUrl: './profile-password.component.html'
})
export class ProfilePasswordComponent {

    formPassword: FormGroup;

    constructor(private authService: AuthService, 
                private notificationService: NotificationService) {}

    ngOnInit() {
        this.formPassword = new FormGroup({
            password: new FormControl(null, Validators.required),
            newPassword: new FormControl(null, [Validators.required, Validators.minLength(8)]),
            newConfirmPassword: new FormControl(null, Validators.required)
        }, this.authService.confirmPasswordValidator('newPassword', 'newConfirmPassword'));
    }

    onSubmit() {
      this.authService.updatePassword(
        this.formPassword.value.password,
        this.formPassword.value.newPassword, 
        this.formPassword.value.newConfirmPassword
        )
        .subscribe(
          (data) => {
            this.notificationService.handleNotification(data.message, 'primary');
            this.formPassword.reset();
          },
          (error) => this.notificationService.handleNotification(error.title, 'danger')
        );
    }
}