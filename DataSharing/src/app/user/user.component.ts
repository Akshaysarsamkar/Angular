import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [CommonModule  ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit  {


@Input() element: { type: string; firstname: string; lastname: string } = {
  type: '',
  firstname: '',
  lastname: ''
};

  constructor(){}

  ngOnInit(): void {
    
  }


}
