import { Component} from '@angular/core';

@Component({
    selector: 'app-home-icon',
    template: `
        <div id="home-icon" [routerLink]="['/']">
            <span class="icon">
                <i class="fa fa-home"></i>
            </span>
        </div>
    `,
    styles: [`
        #home-icon {
          background-color: #363636;
          color: whitesmoke;
          height: 40px;
          text-align: center;
          width: 40px;
        }
        
        #home-icon .icon {
          margin: 10px;
          font-size: 20px;
          line-height: 20px;
          width: 20px;
        }
    `]

})
export class HomeIconComponent {
}