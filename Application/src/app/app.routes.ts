import { Routes } from '@angular/router';
import { TeamsComponent } from './teams/teams.component';
import { PlayersComponent } from './players/players.component';
import { TeamDetailsComponent } from './teams/team-details/team-details.component';
import { TeamStartComponent } from './teams/team-start/team-start.component';
import { TeamEditComponent } from './teams/team-edit/team-edit.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/teams',
    pathMatch: 'full',
  },

  {
    path: 'teams',
    component: TeamsComponent,
    children: [
      {
        path: '',
        component: TeamStartComponent,
      },

      {
        path: 'new',
        component: TeamEditComponent,
      },
      {
        path: ':id',
        component: TeamDetailsComponent,
      },
      {
        path: ':id/edit',
        component: TeamEditComponent,
      },
    ],
  },
  {
    path: 'players',
    component: PlayersComponent,
  },
];
