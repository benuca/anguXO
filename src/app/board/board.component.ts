import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  squares: string[] = [];  
  isXNext: boolean = false;
  winner: string | undefined;
  constructor() { }

  ngOnInit(): void {
    this.newGame();
  }

  newGame(){
    this.squares = Array(9).fill(null);
    this.winner = "";
    this.isXNext = true;
  }

  get player(){
    return this.isXNext ? 'X' : 'O';
  }

  makeMove(squareID: number){
    if (!this.squares[squareID]) 
    {
      this.squares.splice(squareID, 1, this.player);
      this.isXNext = !this.isXNext;
    }
  }

  calculateWinner() {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        this.squares[a] &&
        this.squares[a] === this.squares[b] &&
        this.squares[a] === this.squares[c]
      ) {
        return this.squares[a];
      }
    }
    return null;
  }



}
