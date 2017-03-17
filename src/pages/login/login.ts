import { Component } from '@angular/core';

import { Page1 } from '../page1/page1';

import { AlertController, LoadingController, NavController } from 'ionic-angular';

@Component({
    selector: 'page-login',
    templateUrl: 'login.html'
})

export class LoginPage{
    user = { "email":"", "password":""};

    constructor(
        private alertCtrl:AlertController,
        public loadingCtrl:LoadingController,
        public navCtrl:NavController){
    }

    ngOnInit(){
        console.log('Arranco el init');
    }

    login = ():void =>{
        let loading = this.loadingCtrl.create({
                content:'please wait...'
            });
        if(this.user.email != "" && this.user.password != ""){
            loading.present();
            setTimeout(() =>{
                loading.dismiss();
                this.navCtrl.push(Page1);
            }, 5000);
        }else{
            loading.dismiss();
                let alert = this.alertCtrl.create({
                    title: "login",
                    subTitle: "login incorrecto",
                    buttons: ['Aceptar']
                });
                alert.present();
        }
    }


}