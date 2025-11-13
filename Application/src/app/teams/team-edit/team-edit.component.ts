import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Team } from '../team.model';
import { TeamService } from './../../shared/services/team.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-team-edit',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './team-edit.component.html',
  styleUrl: './team-edit.component.css',
})
export class TeamEditComponent implements OnInit {
  id!: number;
  editMode: boolean = false;
  teamForm!: FormGroup;
  team!: Team;
  constructor(
    private route: ActivatedRoute,
    private teamService: TeamService,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.id = params['id'];
      if (params['id']) {
        this.editMode = true;
      }
      this.initForm();
      console.log('id Fetched to Editing the Team', this.id);
    });
  }

  initForm() {
    let teamName = '';
    let logo = '';
    let description = '';
    const players = new FormArray<FormGroup>([]);

    if (this.editMode) {
      // add the login for adding team
      this.team = this.teamService.getTeam(this.id);
      teamName = this.team.name;
      logo = this.team.logo;
      description = this.team.description;
      if (this.team['players']) {
        for (let player of this.team['players']) {
          players.push(
            new FormGroup({
              name: new FormControl(player.name, Validators.required),
              keySkill: new FormControl(player.keySkill, Validators.required),
            })
          );
        }
      }
    }

    this.teamForm = new FormGroup({
      name: new FormControl(teamName, Validators.required),
      logo: new FormControl(logo, Validators.required),
      description: new FormControl(description, Validators.required),
      players: players,
    });
  }

  onSubmit() {
    const newTeam = new Team(
      this.teamForm.value['name'],
      this.teamForm.value['description'],
      this.teamForm.value['logo'],
      this.teamForm.value['players']
    );
    console.log('on form submit', this.teamForm);

    if (this.editMode) {
      this.teamService.updateTeam(this.id, newTeam);
    } else {
      this.teamService.addTeam(newTeam);
    }

    this.router.navigate(['/teams']);
  }

  get players(): FormArray {
    return this.teamForm.get('players') as FormArray;
  }

  onAddingPlayer() {
    (<FormArray>this.teamForm.get('players')).push(
      new FormGroup({
        name: new FormControl(''),
        keySkill: new FormControl(''),
      })
    );
  }

  onCancle() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  onDeletePlayer(index: number) {
    (<FormArray>this.teamForm.get('players')).removeAt(index);
  }
}
