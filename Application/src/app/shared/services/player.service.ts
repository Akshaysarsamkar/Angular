import { EventEmitter, Injectable } from '@angular/core';
import { Players } from '../players.model';
import { Subject, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PlayerService {
  players: Players[] = [
    new Players('Robin U', 'Batting-WK'),
    new Players('Rachin R', 'All-rounder'),
    new Players('Kuldip Y', 'Bowler'),
    new Players('Mayank Y', 'Batting'),


  ];

  playersChanged:Subject<any> = new Subject();
  
  indexToEdit:Subject<any>= new Subject();
  sub!:Subscription

  // playersChanged: EventEmitter<any> = new EventEmitter();

  constructor() {}

  getPlayers() {
    return this.players.slice();
  }

  getPlayer(index:number){
      return this.players[index];
  }

  addPlayer(newPlayer: Players) {
    this.players.push(newPlayer);
    this.playersChanged.next(this.players.slice())
  }

  updatePlayer(index:any,newPlayer:any){
       this.players[index] = newPlayer
       this.playersChanged.next(this.players.slice())
  }

  addPlayerFormTeam(player:Players[]){
     this.players.push(...player)
     this.playersChanged.next(this.players.slice())
  }

  deletePlayer(index:number){
    this.players.splice(index,1);
    this.playersChanged.next(this.players.slice())
  }
}
