import { Component, OnInit } from '@angular/core';
import {AlertController, LoadingController} from '@ionic/angular';
import {AddclientesService} from '../addclientes.service';
import {environment} from '../../environments/environment';
import {Router} from '@angular/router';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.page.html',
  styleUrls: ['./clientes.page.scss'],
})
export class ClientesPage implements OnInit {
  nombre: string;
  apellido: string;

  constructor( private loadingCtrl: LoadingController, private addService: AddclientesService,
               private alertCtrl: AlertController, private router: Router) { }

  ngOnInit() {
    if (environment.token == null) {
      this.router.navigateByUrl('/login');
      console.log('Estoy en el init, adentro del if');
    }
    console.log('Estoy en el init, afuwra del if');
  }
  async agregarCliente() {
    const loading = await this.loadingCtrl.create({
      message: 'Agregando'
    });
    await loading.present();
    this.addService.cargarCliente(this.nombre, this.apellido).subscribe(
        resp => {
          console.log(resp);
          setTimeout(() => {
            loading.dismiss();
            console.log('Cliente agregado exitosamente');
            this.presentAlertSucces(resp);
          }, 2000);
        },
        (erro) => {
          console.log('Error al agregar cliente');
          console.log(erro.toString());
          setTimeout(() => {
            loading.dismiss();
            this.presentAlertFailed(erro);
          }, 2000);
        }
    );
  }
  async presentAlertSucces(resp: any) {
    const alert = await this.alertCtrl.create({
      header: 'CLIENTE AGREGADO',
      subHeader: 'El nuevo cliente ha sido agregado al sistema. ',
      message: ' ID:' + resp.id.toString() + '. Gracias por utilizar nuestros servicios',
      buttons: ['OK']
    });
    await alert.present();
  }

  async presentAlertFailed(erro: any) {
    const expl: string = null;
    const alert = await this.alertCtrl.create({
      header: 'ERROR',
      subHeader: 'Hubo un problema al agregar el cliente',
      message: erro.toString(),
      buttons: ['OK']
    });
    await alert.present();
  }
}
