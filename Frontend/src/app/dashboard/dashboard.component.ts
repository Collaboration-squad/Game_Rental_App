import { Component } from '@angular/core';

export interface GameElement {
  position: number;
  game: string;
  type: string;
  numOfPlayers: number;
  time: number;
  available: string;
}

const GAMES: GameElement[] = [
  { position: 1, game: 'Hydrogen', type: 'card', numOfPlayers: 1, time: 15, available: 'Yes' },
  { position: 2, game: 'Helium', type: 'card', numOfPlayers: 4, time: 57, available: 'Yes' },
  { position: 3, game: 'Lithium', type: 'card', numOfPlayers: 6, time: 74, available: 'No' },
  { position: 4, game: 'Beryllium', type: 'card', numOfPlayers: 9, time: 15, available: 'Yes' },
  { position: 5, game: 'Boron', type: 'card', numOfPlayers: 10, time: 65, available: 'No' },
  { position: 6, game: 'Carbon', type: 'card', numOfPlayers: 12, time: 15, available: 'Yes' },
  { position: 7, game: 'Nitrogen', type: 'card', numOfPlayers: 14, time: 45, available: 'Yes' },
  { position: 8, game: 'Oxygen', type: 'card', numOfPlayers: 15, time: 224, available: 'Yes' },
  { position: 9, game: 'Fluorine', type: 'card', numOfPlayers: 18, time: 7, available: 'No' },
  { position: 10, game: 'Neon', type: 'card', numOfPlayers: 20, time: 54, available: 'No' }
];

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  displayedColumns: string[] = [
    'position',
    'game',
    'type',
    'numOfPlayers',
    'time',
    'available',
    'rent'
  ];
  dataSource = GAMES;
}
