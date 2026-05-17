import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { WebHeaderComponent } from '../../components/web-header/web-header.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
    selector: 'app-learn',
    templateUrl: './learn.page.html',
    styleUrls: ['./learn.page.scss'],
    imports: [IonicModule, WebHeaderComponent, FooterComponent]
})
export class LearnPage {

  scroll(el: HTMLElement) {
    el.scrollIntoView({behavior: 'smooth'});
  }
}
