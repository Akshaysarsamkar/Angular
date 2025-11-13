import { Component } from '@angular/core';
import { RouterOutlet, RouterLinkWithHref, RouterLink, RouterLinkActive, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { TenantsComponent } from "./tenants/tenants/tenants.component";
import { ServersComponent } from "./servers/servers/servers.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HomeComponent, TenantsComponent, ServersComponent,RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'RoutingProject';
}
