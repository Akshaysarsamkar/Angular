import {
  Component,
  EventEmitter,
  OnDestroy,
  Output,
  ViewChild,
} from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { TeamService } from './../../shared/services/team.service';
import { PlayerService } from '../../shared/services/player.service';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-player-edit',
  imports: [FormsModule,CommonModule],

  templateUrl: './player-edit.component.html',
  styleUrl: './player-edit.component.css',
})
export class PlayerEditComponent implements OnDestroy {
  showalert!: boolean;
  editMode!: boolean;
  indexToEdit!: number;
  player: any;
  sub!: Subscription;
  @ViewChild('playerForm') playerForm!: NgForm;

  constructor(public playerService: PlayerService) {
    this.sub = this.playerService.indexToEdit.subscribe((index) => {
      this.indexToEdit = index;
      this.editMode = true;
      this.player = this.playerService.getPlayer(this.indexToEdit);
      this.playerForm.setValue({
        name: this.player.name,
        keySkill: this.player.keySkill,
      });
    });
  }

  onAdd(playerForm: NgForm) {
    const value = this.playerForm.value;

    if (this.editMode) {
      this.playerService.updatePlayer(this.indexToEdit, {
        name: value.name,
        keySkill: value.keySkill,
      });
      this.editMode = false;
      playerForm.reset();
    } else {
      this.playerService.addPlayer({
        name: value.name,
        keySkill: value.keySkill,
      });
      playerForm.reset();
    }
  }

  onReset() {
    this.playerForm.reset();
  }

  onDelete() {
    this.playerService.deletePlayer(this.indexToEdit);
    this.onReset();
    this.editMode = false;
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
