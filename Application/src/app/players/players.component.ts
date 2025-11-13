import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { PlayerEditComponent } from './player-edit/player-edit.component';
import { Players } from '../shared/players.model';
import { CommonModule } from '@angular/common';
import { PlayerService } from '../shared/services/player.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-players',
  imports: [PlayerEditComponent, CommonModule],
templateUrl: './players.component.html',
  styleUrl: './players.component.css',
})
export class PlayersComponent implements OnInit,OnDestroy {
  players: Players[] = [];
  sub!:Subscription


  constructor(public playerService:PlayerService) {
    this.players = playerService.getPlayers();
   this.sub =  this.playerService.playersChanged.subscribe((players)=>{
       this.players = players;
    })
  }

  ngOnInit(): void {}

 ngOnDestroy(): void {
   this.sub.unsubscribe()
 }

 onClick(index:number)
 {
  this.playerService.indexToEdit.next(index)
 }

  
}
