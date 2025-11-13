import { Component, OnInit } from '@angular/core';
import { TeamDetailsComponent } from './team-details/team-details.component';
import { TeamListComponent } from './team-list/team-list.component';
import { Team } from './team.model';
import { TeamService } from './../shared/services/team.service';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-teams',
  imports: [TeamDetailsComponent, TeamListComponent,RouterOutlet],
  templateUrl: './teams.component.html',
  styleUrl: './teams.component.css',
})
export class TeamsComponent implements OnInit {
  // selectedTeam!: Team;

  constructor(public teamService: TeamService) {}

  ngOnInit(): void {
    // this.teamService.reactiveData.subscribe(()=>{
    //   console.log("the Emiited Evenet Got Catched")
    // })

    
  }


  onGettingSelectedTeam(team: Team) {
    // this.selectedTeam = team;
  }
}
