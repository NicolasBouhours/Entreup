import { Observable, Subscription } from 'rxjs/Rx';
import { Component, OnInit, trigger, state, style, transition, animate, OnDestroy } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
    activity = "running";
    animState = "normal";
    sportChangeSubscrition: Subscription;

    ngOnInit() {
        let timer = Observable.timer(3000,3000);
        this.sportChangeSubscrition = timer.subscribe(t=> {
            this.onChangeActivity();
        });
    }

    onChangeActivity() {
        this.animState ='normal';
        if (this.activity === "running") {
            this.activity = "vélo";
            return 0;
        } if (this.activity === "vélo") {
            this.activity = "tennis";
            return 0;
        }
        if (this.activity === "tennis") {
            this.activity = "running";
            return 0;
        }
    }

    ngOnDestroy() {
        this.sportChangeSubscrition.unsubscribe();
    }
}