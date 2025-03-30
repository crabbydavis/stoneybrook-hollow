import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { WebHeaderComponent } from '../../components/web-header/web-header.component';

@Component({
    selector: 'app-about',
    templateUrl: './about.page.html',
    styleUrls: ['./about.page.scss'],
    imports: [IonicModule, WebHeaderComponent]
})
export class AboutPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView({behavior: 'smooth'});
  }
}
