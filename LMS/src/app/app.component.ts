import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./shared/components/navbar/navbar.component";
import { McodeCOnvertComponent } from "./mcode/mcode-convert/mcode-convert.component";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, McodeCOnvertComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'LMS';
  name = "asd";
}
