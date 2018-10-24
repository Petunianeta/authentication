import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
/**
 * Generated class for the AuthPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-auth',
  templateUrl: 'auth.html',
})
export class AuthPage {
  authForm: FormGroup;
  nav;
  constructor(public navCtrl: NavController, public navParams: NavParams,public formbuilder:FormBuilder) {
    this.nav = navCtrl;

    this.authForm = formbuilder.group({
        username: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z]*'), Validators.minLength(8), Validators.maxLength(30)])],
        password: ['', Validators.compose([Validators.required, Validators.minLength(8)])]
    });
  }
  onSubmit(value: any): void { 
    if(this.authForm.valid) {
    window.localStorage.setItem('username', value.username);
    window.localStorage.setItem('password', value.password);

    this.nav.push("HomePage");
    }
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad AuthPage');
  }

}
