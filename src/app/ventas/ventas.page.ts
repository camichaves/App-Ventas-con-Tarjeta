import { Component, OnInit } from '@angular/core';
import {LoginPage} from '../login/login.page';
import {environment} from '../../environments/environment';
import {Router} from '@angular/router';
import {AlertController, LoadingController} from '@ionic/angular';
import {VenderService} from '../vender.service';

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.page.html',
  styleUrls: ['./ventas.page.scss'],
})
export class VentasPage implements OnInit {
  montovta: number;
  idcliente: number;
  idtarjeta: number;

  constructor(private router: Router, private loadingCtrl: LoadingController,
              private venderService: VenderService, private alertCtrl: AlertController) {
  }

  ngOnInit() {
    if (environment.token == null) {
      this.router.navigateByUrl('/login');
      console.log('Estoy en el init, adentro del if');
    }
    console.log('Estoy en el init, afuwra del if');
  }

  async vender() {
    const loading = await this.loadingCtrl.create({
      message: 'Verificando'
    });
    await loading.present();
    this.venderService.cargarVenta(this.montovta, this.idcliente, this.idtarjeta).subscribe(
        resp => {
          console.log(resp);
          setTimeout(() => {
            loading.dismiss();
            console.log('Venta exitosa');
            this.presentAlertSucces();
          }, 2000);
        },
        (erro) => {
          console.log('Error en la venta');
          console.log(erro.toString());
          setTimeout(() => {
            loading.dismiss();
            this.presentAlertFailed(erro);
          }, 2000);
        }
    );
  }

  async presentAlertSucces() {
    const alert = await this.alertCtrl.create({
      header: 'VENTA EXITOSA',
      subHeader: 'La venta se ha realizado exitosamente',
      message: 'Gracias por utilizar nuestros servicios',
      buttons: ['OK']
    });
    await alert.present();
  }

  async presentAlertFailed(erro: any) {
    const expl: string = null; //lo igualo a erro.explicacion
    const alert = await this.alertCtrl.create({
      header: 'LA VENTA FALLO',
      subHeader: 'Hubo un problema al realizar la venta',
      message: erro.toString(),
      buttons: ['OK']
    });
    await alert.present();
  }
}
