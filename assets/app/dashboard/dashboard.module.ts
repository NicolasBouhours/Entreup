import { DashboardComponent } from './dashboard.component';
import { dashboardRouting } from './dashboard.routing';
import { NgModule } from '@angular/core';
import { SharedModule } from './../shared/shared.module';

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    SharedModule,
    dashboardRouting
  ]
})
export class DashboardModule {

}