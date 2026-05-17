import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { WebHeaderComponent } from '../../components/web-header/web-header.component';
import { FooterComponent } from 'src/app/components/footer/footer.component';

@Component({
    selector: 'app-about',
    templateUrl: './our-team.page.html',
    styleUrls: ['./our-team.page.scss'],
    imports: [IonicModule, WebHeaderComponent, FooterComponent]
})
export class OurTeamPage {

  scroll(el: HTMLElement) {
    el.scrollIntoView({behavior: 'smooth'});
  }
}
