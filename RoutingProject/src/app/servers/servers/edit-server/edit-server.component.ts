import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-server',
  imports: [],
  templateUrl: './edit-server.component.html',
  styleUrl: './edit-server.component.css'
})
export class EditServerComponent implements OnInit {

  queryParams:any;
  fragment:any;

  constructor(private route:ActivatedRoute){}

  ngOnInit(): void {

    this.queryParams = +this.route.snapshot.queryParams['allowEdit'];
    this.fragment = this.route.snapshot.fragment

    console.log("==============",this.fragment,this.queryParams)
    
  }

  

}
