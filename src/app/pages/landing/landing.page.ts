import { ContactUsPage } from './../contact-us/contact-us.page';
import { Component, OnInit } from '@angular/core';
import { trigger, style, state, animate, transition, keyframes } from '@angular/animations';
import { IonRouterOutlet, ModalController, NavController } from '@ionic/angular';
import SwiperCore, { Autoplay, Pagination } from 'swiper';

SwiperCore.use([Pagination, Autoplay]);

@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
  animations: [
    trigger('fadeIn', [
      state('hidden', style({
        opacity: '0', transform: 'translateY(-100%)'
      })),
      state('visible', style({
        opacity: '1', transform: 'translateY(0)'
      })),
      transition('hidden => visible', [
        animate('1000ms 500ms ease', keyframes([
          style({ transform: 'translateY(0)', offset: .1 }),
          style({ opacity: '1', offset: 1 })
        ]))
      ])
    ])
  ]
})
export class LandingPage implements OnInit {

  banner: { image: string }[] = [];
  slideOpts = {
    autoplay: {
      delay: 5000
    },
    speed: 1500
  };
  card2State = 'hidden';
  card3State = 'hidden';
  isModalOpen = false;

  constructor(
    private modalCtrl: ModalController,
    private navCtrl: NavController,
    public routerOutlet: IonRouterOutlet
  ) { }

  ngOnInit() {
  }

  goToGallery(): void {
    this.navCtrl.navigateForward('gallery');
  }

  goToCommissionProcess(): void {
    this.navCtrl.navigateForward('commission-process');
  }

  async showContactUs() {
    const modal = await this.modalCtrl.create({
      component: ContactUsPage,
      cssClass: 'contact-modal'
    });
    modal.present();
  }

  showCognitiveSlides(): void {

  }
}
