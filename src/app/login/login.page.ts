import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formSubmitted = false;
  constructor(private navCtrl: NavController, private fb: FormBuilder) {
  }

  loginForm = this.fb.group({
    userEmail:['', Validators.required, Validators.email],
    userPassword:['', Validators.required],
  });

  ngOnInit() {

  }
  
  invalidField(field:string):boolean{
    if( this.loginForm.get(field)!.invalid && this.formSubmitted){
      return true
    }else{
      return false;
    }
  }

  getErrorMessage(field: string): string{
    let message = '';
    if(this.loginForm.get(field)?.hasError('required')){
      message = 'este campo es requerido.';
    }else if(this.loginForm.get(field)?.hasError('email')){
      message = 'Este campo no cumple con el formato de correo.';
    }
    return message;
  }

  onSubmit(){
    this.formSubmitted = true;
    if( this.loginForm.get('userEmail')?.value === "calderonjohn@coruniamericana.edu.co" && this.loginForm.get('userPassword')?.value === "1234" ){
      if(!this.loginForm.invalid){
        this.navCtrl.navigateForward('/home');
      }
    }
  }

}
