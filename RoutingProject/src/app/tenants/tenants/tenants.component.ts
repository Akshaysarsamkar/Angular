import { Component, OnDestroy, OnInit } from '@angular/core';
import { TenantComponent } from './tenant/tenant.component';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { filter, interval, map, Observable, skip, Subscription, take } from 'rxjs';
import { ServicesServiceService } from '../../services/services-service.service';
  import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tenants',
  imports: [TenantComponent, RouterLink, RouterOutlet, CommonModule],
templateUrl: './tenants.component.html',
  styleUrl: './tenants.component.css',
})
export class TenantsComponent implements OnDestroy, OnInit {
  tenants = [
    {
      id: 1,
      name: 'Tenant 1',
    },
    {
      id: 2,
      name: 'Tenant 2',
    },
    {
      id: 3,
      name: 'Tenant 3',
    },
  ];

  sub: Subscription[] = [];
  observable!: Observable<number>;
  active:boolean=false;

  constructor(private sss:ServicesServiceService) {
    this.sub.push(
      // interval(1000).pipe(filter((data)=>{return data >1}),map((data)=>{return "round "+data})).
    // interval(1000).pipe(take(3),map((data)=>{return "round "+data})).
    interval(1000).pipe(skip(1),map((data)=>{return "round "+data})).
      subscribe((count) => {
        console.log('count from interval', count);
      })
    );
    this.observable = new Observable<number>((observer) => {
      let count = 0;
      setInterval(() => {
        observer.next(count);
        count++;
        if(count>3){
          observer.complete()
        }

        if(count==5){
          observer.error(new Error('Count is Greater Than 3'))
        }
      }, 1000);
    });
  }

  ngOnInit(): void {
    this.sub.push(
      this.observable.subscribe((count) => {
        console.log('count from observable', count);
      },
      (error)=>{console.log("Error From Observable",error)},
      ()=>{console.log("Observable after Complation",)}
     )
    );
  }

  ngOnDestroy(): void {
    this.sub.forEach((s) => {
      s.unsubscribe();
    });
  } 


  isServerActivated(){
     this.sss.activetedEmitter.subscribe((data)=>{
        if(data)
         this.active = true;
        else 
           this.active = false
     })
  }


}
