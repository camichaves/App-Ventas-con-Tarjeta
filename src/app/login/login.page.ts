import { Component, OnInit } from '@angular/core';
import {AlertController, LoadingController} from '@ionic/angular';

import { UsuarioService } from '../usuario.service';
import {environment} from '../../environments/environment';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public token: string = null;
  constructor( public alertController: AlertController, public loadingCtrl: LoadingController,
               private usuarioService: UsuarioService, private router: Router,
               private alertCtrl: AlertController) { }

  ngOnInit() {
  }

  async presentAlertPrompt() {
    const alert = await this.alertController.create({
      header: 'Login',
      inputs: [
        {
          name: 'usuario',
          type: 'text',
          placeholder: 'Nombre de Usuario'
        },
        {
          name: 'password',
          type: 'password',
          id: 'password',
          placeholder: 'Contraseña'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ingresar',
          cssClass: 'ingresarButton',
          handler: data => {
            console.log('Confirm Ok');
            console.log(data);
            this.verificarUsuario(data.usuario, data.password);
          }
        }
      ]
    });

    await alert.present();
  }
  /////////
  async verificarUsuario(username: string, password: string) {
    const loading =  await this.loadingCtrl.create({
      message: 'Verificando'
    });
    loading.present();

    // verifico user y contra

    // tslint:disable-next-line:no-unused-expression
    this.usuarioService.autenticarUsuario(username, password).subscribe(resp => {
      console.log(resp);
      // @ts-ignore
      environment.token = resp.id_token;
      setTimeout(() => {
        loading.dismiss();
        this.router.navigateByUrl('/tabs/ventas');
      }, 2000);
    },
        (erro) => {
      environment.token = null;
      console.log('Error en el login');
      setTimeout(() => {
            loading.dismiss();
            this.presentAlertFailed(erro);
          }, 2000);
        } ); }

  async presentAlertFailed(erro: any) {
    const alert = await this.alertCtrl.create({
     // header: 'ERROR EN LOGIN',
      subHeader: 'Hubo un problema al iniciar sesion',
      message: 'El usuario o la contraseña es incorrecta',
      buttons: ['OK']
    });
    await alert.present();
  }
}
