import { EventEmitter, Injectable } from '@angular/core';
import { Team } from '../../teams/team.model';
import { Players } from '../players.model';
import { PlayerService } from './player.service';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TeamService {
  team1 =
    'https://t4.ftcdn.net/jpg/13/07/03/13/360_F_1307031398_qq8a3o4Kwp63gUacxKGdBf0K86Nv6UO1.jpg';
  team2 =
    'https://media.istockphoto.com/id/177427917/photo/close-up-of-red-cricket-ball-and-bat-sitting-on-grass.jpg?s=612x612&w=0&k=20&c=DcorerbBUeDNTfld3OclgHxCty4jih2yDCzipffX6zw=';

  teamChanged: Subject<any> = new Subject();

  teams!: Team[];
  constructor(public playerService: PlayerService) {}

  setTeams(team: Team[]) {
    this.teams = team;
    this.teamChanged.next(this.teams.slice());
  }

  getTeams() {
    console.log('this is team service method');
    return this.teams.slice();
  }

  showAlert: boolean = true;
  // addTeam(){
  //   console.log("Team Added succesfully.......")
  //   this.showAlert = true;
  // }

  addPlayers(players: Players[]) {
    this.playerService.addPlayerFormTeam(players);
  }

  getTeam(index: number) {
    return this.teams[index];
  }

  addTeam(newteam: Team) {
    this.teams.push(newteam);
    this.teamChanged.next(this.teams.slice());
  }

  updateTeam(index: number, team: Team) {
    this.teams[index] = team;
    this.teamChanged.next(this.teams.slice());
  }

  deleteTeam(index: number) {
    this.teams.splice(index, 1);
    this.teamChanged.next(this.teams.slice());
  }
}
