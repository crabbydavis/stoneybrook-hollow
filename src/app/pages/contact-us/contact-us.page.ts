import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { ToastController, IonicModule } from '@ionic/angular';

import { Clipboard } from '@capacitor/clipboard';
import { WebHeaderComponent } from '../../components/web-header/web-header.component';
import { FooterComponent } from 'src/app/components/footer/footer.component';

@Component({
    selector: 'app-contact-us',
    templateUrl: './contact-us.page.html',
    styleUrls: ['./contact-us.page.scss'],
    imports: [IonicModule, WebHeaderComponent, FooterComponent]
})
export class ContactUsPage implements OnInit {

  contactForm: UntypedFormGroup = new UntypedFormGroup({});
  emailMessage: string;

  constructor(
    private fb: UntypedFormBuilder,
    private toasterCtrl: ToastController
  ) { }

  ngOnInit() {
  }

  async copyPhone() {
    Clipboard.write({
      string: '435-840-2031'
    }).then(async () => {
      const toast = await this.toasterCtrl.create({
        message: 'Copied to clipboard',
        duration: 2000
      });
      toast.present();
    });
  }
}
