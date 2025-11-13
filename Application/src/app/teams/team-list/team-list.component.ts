import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { IndividualTeamComponent } from './individual-team/individual-team.component';
import { Team } from '../team.model';
import { CommonModule, NgFor } from '@angular/common';
import { TeamService } from '../../shared/services/team.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-team-list',
  imports: [IndividualTeamComponent, CommonModule],
  templateUrl: './team-list.component.html',
  styleUrl: './team-list.component.css',
})
export class TeamListComponent implements OnInit,OnDestroy {
  teams!: Team[];
  sub!:Subscription
  // selectedTeam!: Team;
  // @Output() selectedTeam: EventEmitter<any> = new EventEmitter();
  constructor(public teamService: TeamService,private router:Router,private route:ActivatedRoute) {
    this.teams = teamService.getTeams();
    this.teamService.teamChanged.subscribe((data)=>{
      this.teams = data
    })
  }

  ngOnInit(): void {}

  showAlert!: boolean;

  addTeam() {
    // this.teamService.addTeam();
    // this.showAlert = this.teamService.showAlert;

    // setTimeout(() => {
    //   this.showAlert = false;
    // }, 3000);
  }

  onTeamSelect(team: Team) {
    // this.selectedTeam.emit(team);
    // console.log(team);
  }

  onAddTeam(){
    this.router.navigate(['new'],{relativeTo:this.route})
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe()
  }
}
