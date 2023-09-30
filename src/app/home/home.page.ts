import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { mocks } from '../common/mocks';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private navCtrl: NavController, private fb: FormBuilder) {
  }

  destinosForm = this.fb.group({
    destinos:['', Validators.required],
  });
  
  destinos = mocks.destinos;

  ngOnInit() {

  }


  trackByFn() {
    // console.log("DESTINO: ", this.destinosForm.get('destinos'))
    // return mocks.destinos
  }

  verDetalles () {
    this.navCtrl.navigateForward('/detalle');
  }

}
