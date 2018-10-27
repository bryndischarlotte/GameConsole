const TicTacToe = require('./tictactoe');

class Square {
    constructor() {
        this.box = '';
    }
    makeMove(counter) {
        console.log('Placing symbol....');
        if (counter === 0 && this.box === '') {
            this.box = 'X';
            counter = 1;
        }
        else if (counter === 1 && this.box === '') {
            this.box = 'O';
            counter = 0; 
        }
        else {
            console.log('This square has already been marked!');
        }
    }
}

module.exports = Square; 