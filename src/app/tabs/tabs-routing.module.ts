import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'ventas',
        loadChildren: () => import('../ventas/ventas.module').then( m => m.VentasPageModule)
      },
      {
        path: 'clientes',
        loadChildren: () => import('../clientes/clientes.module').then( m => m.ClientesPageModule)
      },
      {
        path: 'tarjetas',
        loadChildren: () => import('../tarjetas/tarjetas.module').then( m => m.TarjetasPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
