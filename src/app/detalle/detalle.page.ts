import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.page.html',
  styleUrls: ['./detalle.page.scss'],
})
export class DetallePage implements OnInit {

  constructor(private navCtrl: NavController, private fb: FormBuilder) {
  }

  detallesForm = this.fb.group({
    destinos:['', Validators.required],
  });

  ngOnInit() {
  }

  onSubmit() {
    this.navCtrl.navigateForward('/confirmacion');
  }
}
