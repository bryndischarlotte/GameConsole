const TicTacToe = require('./tictactoe');
const Game = require('./game');
const Square = require('./square');

class Board {
    constructor(grid) {
        this.grid = [[new Square(), new Square(), new Square()],
        [new Square(), new Square(), new Square()],
        [new Square(), new Square(), new Square()]
        ];
    }
}

module.exports = Board; 