import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {FormBuilder, FormGroup, Validators, AbstractControl} from '@angular/forms';
/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  formgroup:FormGroup;
  firstname:AbstractControl;
  lastname:AbstractControl;

  constructor(public navCtrl: NavController, public navParams: NavParams, public formbuilder:FormBuilder) {
    this.formgroup = formbuilder.group({
      firstname:['',Validators.required,Validators.minLength(5)],
      lastname:['',Validators.required,Validators.maxLength(15)]
    });

    this.firstname = this.formgroup.controls['firstname'];
    this.lastname = this.formgroup.controls['lastname'];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

}
