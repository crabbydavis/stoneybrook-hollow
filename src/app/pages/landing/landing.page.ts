import { ContactUsPage } from './../contact-us/contact-us.page';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { trigger, style, state, animate, transition, keyframes } from '@angular/animations';
import { IonRouterOutlet, IonicSlides, ModalController, NavController } from '@ionic/angular';
import SwiperCore, { Autoplay, Pagination } from 'swiper';
import { Router } from '@angular/router';

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
  @ViewChild('swiper')
  swiperRef: ElementRef | undefined;

  swiperModules = [IonicSlides];
  banner: { image: string }[] = [];
  slideshow = new Array(12);
  playVideo = false;
  
  constructor(
    private modalCtrl: ModalController,
    private navCtrl: NavController,
    public routerOutlet: IonRouterOutlet,
    private router: Router
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

  goToFaq() {
    this.router.navigateByUrl('contact');
  }

  slideBack() {
    this.swiperRef?.nativeElement.swiper.slidePrev();
  }

  slideForward() {
    this.swiperRef?.nativeElement.swiper.slideNext();
  }
}
