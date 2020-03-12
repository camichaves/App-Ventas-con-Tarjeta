import { Component, OnInit } from '@angular/core';
import {AlertController, LoadingController} from '@ionic/angular';
import {AddclientesService} from '../addclientes.service';
import {Router} from '@angular/router';
import {environment} from '../../environments/environment';
import {AddtarjetasService} from '../addtarjetas.service';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.page.html',
  styleUrls: ['./tarjetas.page.scss'],
})
export class TarjetasPage implements OnInit {
  numero: number;
  tipo: string;
  cod: number;
  venc: number;
  montomax: number;
  constructor( private loadingCtrl: LoadingController, private addService: AddtarjetasService,
               private alertCtrl: AlertController, private router: Router) { }

  ngOnInit() {
    if (environment.token == null) {
      this.router.navigateByUrl('/login');
      console.log('Estoy en el init, adentro del if');
    }
    console.log('Estoy en el init, afuwra del if');
  }
  async agregarTarjeta() {
    const loading = await this.loadingCtrl.create({
      message: 'Agregando'
    });
    await loading.present();
    this.addService.cargarTarjeta(this.tipo, this.numero, this.cod, this.venc, this.montomax).subscribe(
        resp => {
          console.log(resp);
          setTimeout(() => {
            loading.dismiss();
            console.log('Tarjeta agregado exitosamente');
            this.presentAlertSucces(resp);
          }, 2000);
        },
        (erro) => {
          console.log('Error al agregar tarjeta');
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
      header: 'TARJETA AGREGADA',
      subHeader: 'La nueva tarjeta ha sido agregado al sistema. ',
      message: ' ID:' + resp.id.toString() + '. Gracias por utilizar nuestros servicios',
      buttons: [
        {
          text: 'OK',
          cssClass: 'okButton'
        }
      ]
    });
    await alert.present();
  }

  async presentAlertFailed(erro: any) {
    const expl: string = null;
    const alert = await this.alertCtrl.create({
      header: 'ERROR',
      subHeader: 'Hubo un problema al agregar la tarjeta',
      message: erro.toString(),
      buttons: [
        {
          text: 'OK',
          cssClass: 'okButton'
        }
      ]
    });
    await alert.present();
  }

}
