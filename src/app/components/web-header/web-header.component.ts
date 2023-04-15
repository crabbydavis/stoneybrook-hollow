import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-web-header',
  templateUrl: './web-header.component.html',
  styleUrls: ['./web-header.component.scss'],
})
export class WebHeaderComponent {
    @Input() transparent = false;
    constructor(private router: Router){}

    navigate(url) {
        this.router.navigateByUrl(url);
    }
}
