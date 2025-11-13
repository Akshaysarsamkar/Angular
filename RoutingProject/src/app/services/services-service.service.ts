import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesServiceService {

  activetedEmitter = new Subject<boolean>();

  private servers = [
    {
      id:1,
      name:'Productionserver',
      status:'Online',
    },

    {
      id:2,
      name:'Testserver',
      status:'offline',
    },

    {
      id:3,
      name:'Devserver',
      status:'offline',
    },

  ]

  constructor() { }

  getServers(){
      return this.servers;
  }

  getServer(id:number){
    const server = this.servers.find((s)=>{return s.id === id})

    if (!server) {
  console.error('User not found!');
  return;
}

    return server;
  }


}
