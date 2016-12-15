import { NavbarComponent } from './layout/navbar/navbar.component';
import { SharedModule } from './shared/shared.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './layout/home/home.component';
import { AuthGuard } from './shared/guards/auth.guard';
import { JwtService } from './shared/services/jwt.service';
import { ApiService } from './shared/services/api.service';
import { UploadService } from './shared/services/upload.service';
import { AuthService } from './shared/services/auth.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';

import { routing } from './app.routing';

import { NotificationService } from './shared/notification/notification.service';

import { AppComponent } from "./app.component";
import { HeaderComponent } from './layout/header/header.component';
import { NotificationComponent } from './shared/notification/notification.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        NotificationComponent,
        HomeComponent,
        DashboardComponent,
        NavbarComponent
    ],
    imports: [
        BrowserModule, 
        routing, 
        HttpModule
    ],
    providers: [
        JwtService,
        ApiService,
        AuthService, 
        NotificationService, 
        UploadService,
        AuthGuard
    ],
    bootstrap: [AppComponent]
})
export class AppModule {

}