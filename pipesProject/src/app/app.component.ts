import { CommonModule, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TrimString } from './pipes/trimString.pipe';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,UpperCasePipe,CommonModule,TrimString],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pipes Project is here';

  data:string="uppercase"
  createdDate = new Date()

  sliceData = "Software Enginner"
}
