import { Component, Input, Output, EventEmitter, input } from '@angular/core';
import { Team } from '../../team.model';
import { TeamService } from '../../../shared/services/team.service';
import { RouterLink, RouterLinkActive } from "@angular/router";
import { SlicePipe } from '@angular/common';

@Component({
  selector: 'app-individual-team',
  imports: [RouterLink, RouterLinkActive,SlicePipe],
templateUrl: './individual-team.component.html',
  styleUrl: './individual-team.component.css'
})
export class IndividualTeamComponent {

  @Input() team!:Team
  @Input() id!:number
  //  @Output() onTeamSelect:EventEmitter<any> = new EventEmitter();

   constructor(public teamService:TeamService){

   }

   onSelectingTeam(){
    // this.teamService.selectedTeam.emit(this.team);
   }
    

}
