import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from './user/user.component';
import { UserFormComponent } from './user-form/user-form.component';
import { BackgroundDirective } from './shared/background.directive';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CommonModule,FormsModule,UserComponent,UserFormComponent,BackgroundDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'DataSharing';
  users:any[] = [{type:'admin',firstname:'firstname',lastname:'lastname'}]


  onAddSuperUser(event:any){
    this.users.push({
      type:'superuser',
      firstname:event.firstname,
      lastname:event.lastname
    })
  }

   onAddAdmin(event:any){
      this.users.push({
      type:'admin',
      firstname:event.firstname,
      lastname:event.lastname
    })
  }
}
