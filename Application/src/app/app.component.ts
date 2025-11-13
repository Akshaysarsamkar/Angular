import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { TeamsComponent } from './teams/teams.component';
import { PlayersComponent } from './players/players.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,HeaderComponent,TeamsComponent,PlayersComponent,FormsModule,RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Application';

  showTeam:boolean=true;

  onSelection(event:any){
        if(event === 'teams'){
          this.showTeam = true;
        }else{
          this.showTeam = false;
        }
  } 
}
