import { Component, Input } from '@angular/core';
import { Team } from './../team.model';
import { TeamService } from '../../shared/services/team.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PlayerService } from '../../shared/services/player.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MyDropdownDirective } from '../../shared/my-dropdown.directive';

@Component({
  selector: 'app-team-details',
  imports: [FormsModule, CommonModule, MyDropdownDirective],
  templateUrl: './team-details.component.html',
  styleUrl: './team-details.component.css',
})
export class TeamDetailsComponent {
  teamSelected!: Team;
  id!: number;

  constructor(
    public teamService: TeamService,
    public playerService: PlayerService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.route.params.subscribe((params) => {
      this.id = this.route.snapshot.params['id'];
      this.teamSelected = this.teamService.getTeam(this.id);
    });

    console.log('Selected Id is', this.id);
  }

  addPlayers() {
    this.teamService.addPlayers(this.teamSelected.players ?? []);
  }

  onEditTeam() {
    this.router.navigate(['../', this.id, 'edit'], { relativeTo: this.route });
  }

  onDelete() {
    this.teamService.deleteTeam(this.id);
    this.router.navigate(['teams']);
  }
}
