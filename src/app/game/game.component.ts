import { Component, OnInit } from '@angular/core';
import { Status } from '../game-status';
import { Gamelogic } from '../gamelogic';
@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css'],
  providers: [Gamelogic]
})
export class GameComponent implements OnInit {

  constructor(public game: Gamelogic) { }

  ngOnInit(): void {
  }
   startGame(): void{
          this.game.gameStart();
          const currentPlayer = "Current Turn : Player "+this.game.currentTurn;

          const information = document.querySelector('.current-status');

          information.innerHTML = currentPlayer;
   }
  async clickSubField(subfield: any): Promise<void>{
    if(this.game.gameStatus === 1)
    {
        const position = subfield.currentTarget.getAttribute('position');

        this.game.setField(position, this.game.currentTurn);
        const color =  this.game.getPlayerColorClass();

        subfield.currentTarget.classList.add(color);
        this.game.changePlayer();

        //await this.checkGameEndWinner();

         //await this.checkGameEndFull();



        if(this.game.gameStatus === 1)
        {
          const currentPlayer = "Current Turn : Player "+this.game.currentTurn;
            const information = document.querySelector('.current-status');
            information.innerHTML = currentPlayer;
        }
    }

    console.log(this.game.currentTurn);
  }
}
