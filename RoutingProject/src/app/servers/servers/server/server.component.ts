import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ServicesServiceService } from './../../../services/services-service.service';
@Component({
  selector: 'app-server',
  imports: [],
  
templateUrl: './server.component.html',
  styleUrl: './server.component.css'
})
export class ServerComponent implements OnInit {

  server:{id:number,name:string,status:string}|undefined
  allowEdit!:any
  constructor(private route:ActivatedRoute,private sss:ServicesServiceService,private router:Router){}

  ngOnInit(): void {

    this.route.params.subscribe((params:Params)=>{
         this.server =this.sss.getServer(+params['id'])
    })

    this.route.queryParams.subscribe((queryParams:any)=>{
         this.allowEdit = +queryParams['allowEdit']
         console.log("Query params fetched in Component",this.allowEdit);
         
    }) 
  }

  onEditServer(){
    this.router.navigate(['edit'],{relativeTo:this.route,queryParamsHandling:'merge'})
  }

}
