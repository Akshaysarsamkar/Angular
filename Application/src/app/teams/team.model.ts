import { Players } from '../shared/players.model';

export class Team {
  name: string;
  description: string;
  logo: any;
  players?: Players[];

  constructor(name: string, description: string, logo: any,players?:Players[]) {
    this.name = name;
    this.description = description;
    this.logo = logo;
    this.players = players;
  }
}
