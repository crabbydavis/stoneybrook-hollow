import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { WebHeaderComponent } from '../../components/web-header/web-header.component';
import { FooterComponent } from 'src/app/components/footer/footer.component';

@Component({
    selector: 'app-about',
    templateUrl: './about.page.html',
    styleUrls: ['./about.page.scss'],
    imports: [IonicModule, WebHeaderComponent, FooterComponent]
})
export class AboutPage {

  scroll(el: HTMLElement) {
    el.scrollIntoView({behavior: 'smooth'});
  }
}
