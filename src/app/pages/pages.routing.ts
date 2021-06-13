import { Routes,RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { DashboardComponent } from './dashboard/dashboard.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { ProgressComponent } from './progress/progress.component';
import { PagesComponent } from './pages.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { ReniecComponent } from './reniec/reniec.component';

const routes: Routes=[
    {
        path: 'dashboard',
        component: PagesComponent,
        children: [
          { path: '', component: DashboardComponent, data:{titulo:'Dashboard'} },
          { path: 'progress', component: ProgressComponent, data:{titulo:'ProgressBar'} },
          { path: 'grafica1', component: Grafica1Component, data:{titulo:'Grafica'} },
          { path: 'account-settings', component: AccountSettingsComponent, data:{titulo:'Settings'} },
          { path: 'promesas', component: PromesasComponent, data:{titulo:'Promesas'} },
          { path: 'rxjs', component: RxjsComponent, data:{titulo:'RXJS'} },
          { path: 'reniec', component: ReniecComponent , data:{titulo:'Reniec'} },
        ],
      },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
  export class PagesRoutingModule {}