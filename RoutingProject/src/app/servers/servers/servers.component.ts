import { Component, OnInit } from '@angular/core';
import { EditServerComponent } from './edit-server/edit-server.component';
import { ServerComponent } from './server/server.component';
import { ActivatedRoute, Router, RouterLink, RouterOutlet } from "@angular/router";
import { CommonModule } from '@angular/common';
import { ServicesServiceService } from '../../services/services-service.service';

@Component({
  selector: 'app-servers',
  imports: [EditServerComponent, ServerComponent, RouterLink, CommonModule,RouterOutlet],
  templateUrl: './servers.component.html',
  styleUrl: './servers.component.css'
})
export class ServersComponent implements OnInit {


  servers:any
  constructor(private router:Router,private root:ActivatedRoute,private sss:ServicesServiceService){}

  ngOnInit(): void {
    this.servers = this.sss.getServers();
  }

  loadTenants(){
    this.router.navigate(['/tenants'],{relativeTo:this.root})
  }

  activateServer(){
    this.sss.activetedEmitter.next(true)
  }
}
