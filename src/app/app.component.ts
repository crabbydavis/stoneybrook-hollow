import { ContactUsPage } from './pages/contact-us/contact-us.page';
import { Component, ViewEncapsulation } from '@angular/core';
import { register } from 'swiper/element/bundle';
import { Platform, ModalController } from '@ionic/angular';

register();

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {

  constructor(
    private modalCtrl: ModalController,
    private platform: Platform,
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
    });
  }

  async showContactModal() {
    const modal = await this.modalCtrl.create({
      component: ContactUsPage,
      cssClass: 'contact-modal'
    });
    modal.present();
  }
}
