import { Routes } from '@angular/router';
import { TenantsComponent } from './tenants/tenants/tenants.component';
import { ServersComponent } from './servers/servers/servers.component';
import { HomeComponent } from './home/home/home.component';
import { TenantComponent } from './tenants/tenants/tenant/tenant.component';
import { EditServerComponent } from './servers/servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/servers/server/server.component';
import { ErrorPageComponent } from './error-page/error-page.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'servers',
    component: ServersComponent,
    children: [
      {
        path: ':id',
        component: ServerComponent,
      },
      {
        path: ':id/edit',
        component: EditServerComponent,
      },
    ],
  },

  {
    path: 'tenants',
    component: TenantsComponent,
    children: [
      {
        path: ':id/:name',
        component: TenantComponent,
      },
    ],
  },
  {
    path: '404',
    component: ErrorPageComponent,
  },
  {
    path: '**',
    redirectTo: '/404',
  },


];
