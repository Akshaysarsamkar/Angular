import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Team } from '../../../teams/team.model';
import { TeamService } from './../team.service';
import { map, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  sub: Subject<any> = new Subject();
  endPoint =
    'https://team-organizer-9fb0e-default-rtdb.firebaseio.com/teams.json';

  constructor(
    private readonly httpClient: HttpClient,
    private teamService: TeamService
  ) {}

  storeTeams() {
    const teams = this.teamService.getTeams();
    this.httpClient.put(this.endPoint, teams).subscribe(
      (res) => {
        this.sub.next(res);
        console.log('Responce of Put Request:', res);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  fetchData() {
    this.httpClient
      .get<Team[]>(this.endPoint)
      .pipe(
        map((teams) => {
          let transformArray = teams;
          teams.forEach((team) => {
            transformArray.push({
              ...team,
              players: team?.players ? team?.players : [],
            });
          });
          return transformArray;
        })
      )
      .subscribe((res) => {
        console.log('Responce of Get Request', res);
        this.teamService.setTeams(res);
      });
  }
}
