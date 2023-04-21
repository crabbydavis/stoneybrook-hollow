import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';

import { Clipboard } from '@capacitor/clipboard';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.page.html',
  styleUrls: ['./contact-us.page.scss'],
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
