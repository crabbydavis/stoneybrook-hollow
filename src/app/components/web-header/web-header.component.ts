import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
    selector: 'app-web-header',
    templateUrl: './web-header.component.html',
    styleUrls: ['./web-header.component.scss'],
    imports: [IonicModule]
})
export class WebHeaderComponent {
    @Input() transparent = false;
    constructor(private router: Router){}

    navigate(url) {
        this.router.navigateByUrl(url);
    }
}
