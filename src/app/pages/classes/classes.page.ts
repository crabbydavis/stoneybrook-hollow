import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { WebHeaderComponent } from '../../components/web-header/web-header.component';
import { FooterComponent } from 'src/app/components/footer/footer.component';

@Component({
    selector: 'app-classes',
    templateUrl: './classes.page.html',
    styleUrls: ['./classes.page.scss'],
    imports: [IonicModule, WebHeaderComponent, FooterComponent]
})
export class ClassesPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView({behavior: 'smooth'});
  }
}
