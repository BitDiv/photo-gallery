import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { RestfulService } from '../shared/api/restful.service';
import { LoginPtp } from '../shared/modelo/loginptp';
import { Usuario } from '../shared/modelo/usuario';
import { FormGroup, Validators, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  cemail: '';
  cclave: '';
  formLogin: FormGroup;
  data: any = {
    customer_name: 'WILLY'
  }
  someString: string = "test";
  loading = null;
  constructor(private _router: Router, public loadingController: LoadingController, public dataSource: RestfulService,
    public builder: FormBuilder, public toastController: ToastController) { 

    this.formLogin = builder.group({  
      customer_name: new FormControl('xdxd', [Validators.required]),
      cclave: new FormControl(undefined,[Validators.required]),
    });

  }

  do_something($event) {
    this.someString = $event.target.value;
  }

  setCemail($event) {
    this.cemail = $event.target.value;
  }

  setCclave($event) {
    this.cclave = $event.target.value;
  }

  change() {
    alert('jaja')
  }

  ngOnInit() {

    console.log(this.data)
    //this.createLoading();
  }

  rutaToUsuarioDetalle() {
    console.log('wtf')
    //this._router.navigate(['/dashboard']);
    //this.presentLoading()
  }
  
  async createLoading() {
    this.loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
      duration: 0
    });
  }

  async presentLoading(cemail, cclave) {
    await this.createLoading();
    await this.loading.present();
    this.login(cemail, cclave, "asdasd");
    
    

    /*const { role, data } = await loading.onDidDismiss();
    this._router.navigate(['/dashboard']);
    console.log('Loading dismissed!');*/
  }

  login(cusuario: string, cclave: string, ctoken_celular: string) {
    this.dataSource.PostLoginPhp(cusuario, cclave, ctoken_celular).subscribe((data)=>{
      this.set_login(data)
    })
  }

  set_login(data: Usuario) {
    this.loading.dismiss()
    if(data.respuesta.berror) {
      this.presentToast(data.respuesta.cmensaje)
    } else {
      this.presentToast(data.respuesta.cmensaje + " a " + data.cnombres)
      this._router.navigate(['/dashboard']);
    }
    console.log(data)
  }

  submit() {
    console.log(this.cemail)
    console.log(this.cclave)
    this.presentLoading(this.cemail, this.cclave)
    /*console.log(this.formLogin.value)
    if (this.formLogin.valid) {
      console.log("VALID")
    }*/
  }

  async presentToast(message) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000
    });
    toast.present();
    
  }

}
