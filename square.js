const TicTacToe = require('./tictactoe');

class Square {
    constructor() {
        this.box = '';
    }
    makeMove(counter) {
        console.log('Placing symbol....');
        if (counter === 0 && this.box === '') {
            this.box = 'X';
            return true; 
        }
        else if (counter === 1 && this.box === '') {
            this.box = 'O';
            return true; 
        }
        else {
            console.log('This square has already been marked!');
            return false; 
        }
    }
}

module.exports = Square; 