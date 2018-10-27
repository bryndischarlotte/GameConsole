const TicTacToe = require('./tictactoe');
const Board = require('./board');
const Player = require('./player');

class Game {
    constructor() {
        console.log('Creating game.....');
        this.board = new Board();
        this.players = [new Player('X'), new Player('O')];
        this.gameStatus = true;
        this.totalMoves = 0;
    }
    checkWinner() {
        console.log('Scanning board for winners.... ');
        if (this.gameStatus === true) {
            console.log('gameStatus === True');
            // Horizontal check 
            for (var i = 0; i < 3; i++) {
                if (this.board.grid[i][0].box === this.board.grid[i][1].box &&
                    this.board.grid[i][0].box === this.board.grid[i][2].box &&
                    this.board.grid[i][0].box != '') {
                    // Print winner function
                    console.log('Winner found!');
                    this.gameStatus = false;
                    console.log(this.gameStatus);
                }
            }
            // Vertical check 
            for (var j = 0; j < 3; j++) {
                if (this.board.grid[0][j].box === this.board.grid[1][j].box &&
                    this.board.grid[0][j].box === this.board.grid[2][j].box &&
                    this.board.grid[0][j].box != '') {
                    // Print winner function
                    console.log('Winner found!');
                    this.gameStatus = false;
                    console.log(this.gameStatus);
                }
            }
            // KRISSKROSS
            if (this.board.grid[0][0].box == this.board.grid[1][1].box &&
                this.board.grid[0][0].box == this.board.grid[2][2].box &&
                this.board.grid[0][0].box != "" ||
                this.board.grid[0][2].box == this.board.grid[1][1].box &&
                this.board.grid[0][2].box == this.board.grid[2][0].box &&
                this.board.grid[0][2].box != "") {
                // Print winner function
                console.log('Winner found!');
                this.gameStatus = false;
                console.log(this.gameStatus);
            }
            // Draw
            else if (this.totalMoves === 9) {
                console.log("Draw!");
                this.gameStatus = false;
                console.log(this.gameStatus);
            }
        }
    }
    countMoves() {
        this.totalMoves++;
        console.log("Moves made: " + this.totalMoves);
        return this.totalMoves;
    }
}
module.exports = Game; 