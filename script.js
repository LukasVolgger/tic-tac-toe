let fields = [];
let currentShape = 'cross';
let gameOver = false;

function fillShape(id) {

    // Check if current field is empty
    if (!fields[id] && !gameOver) {

        if (currentShape == 'cross') {
            currentShape = 'circle';

            document.getElementById('player-1').classList.add('player-inactive');
            document.getElementById('player-2').classList.remove('player-inactive');
        } else {
            currentShape = 'cross';

            document.getElementById('player-1').classList.remove('player-inactive');
            document.getElementById('player-2').classList.add('player-inactive');
        }

        fields[id] = currentShape;
        console.log(fields);

        draw();
        checkForWin();

    }
}

function draw() {
    for (let i = 0; i < fields.length; i++) {
        if (fields[i] == 'circle') {
            document.getElementById(`circle-${i}`).classList.remove('d-none');
        }

        if (fields[i] == 'cross') {
            document.getElementById(`cross-${i}`).classList.remove('d-none');
        }
    }
}

function checkForWin() {
    let winner;

    for (let i = 1; i <= 7; i++) {
        document.getElementById(`crossed-line-${i}`).classList.remove('d-none');
    }

    // Horizontal
    // ###########################################################################

    // [X][X][X]
    // [ ][ ][ ]
    // [ ][ ][ ]
    if (fields[0] == fields[1] && fields[1] == fields[2] && fields[0]) {
        winner = fields[0];
        console.log('Win option: 1');
        document.getElementById('crossed-line-1').style.transform = 'scaleX(1)';
    }

    // [ ][ ][ ]
    // [X][X][X]
    // [ ][ ][ ]
    if (fields[3] == fields[4] && fields[4] == fields[5] && fields[3]) {
        winner = fields[3];
        console.log('Win option: 2');
        document.getElementById('crossed-line-2').style.transform = 'scaleX(1)';
    }

    // [ ][ ][ ]
    // [ ][ ][ ]
    // [X][X][X]
    if (fields[6] == fields[7] && fields[7] == fields[8] && fields[6]) {
        winner = fields[6];
        console.log('Win option: 3');
        document.getElementById('crossed-line-3').style.transform = 'scaleX(1)';
    }

    // Vertical
    // ###########################################################################

    // [X][ ][ ]
    // [X][ ][ ]
    // [X][ ][ ]
    if (fields[0] == fields[3] && fields[3] == fields[6] && fields[0]) {
        winner = fields[0];
        console.log('Win option: 4');
        document.getElementById('crossed-line-4').style.transform = 'rotate(90deg) scaleX(1)';
    }

    // [ ][X][ ]
    // [ ][X][ ]
    // [ ][X][ ]
    if (fields[1] == fields[4] && fields[4] == fields[7] && fields[1]) {
        winner = fields[1];
        console.log('Win option: 5');
        document.getElementById('crossed-line-5').style.transform = 'rotate(90deg) scaleX(1)';
    }

    // [ ][ ][X]
    // [ ][ ][X]
    // [ ][ ][X]
    if (fields[2] == fields[5] && fields[5] == fields[8] && fields[2]) {
        winner = fields[2];
        console.log('Win option: 6');
        document.getElementById('crossed-line-6').style.transform = 'rotate(90deg) scaleX(1)';
    }

    // Diagonal
    // ###########################################################################

    // [X][ ][ ]
    // [ ][X][ ]
    // [ ][ ][X]
    if (fields[0] == fields[4] && fields[4] == fields[8] && fields[0]) {
        winner = fields[0];
        console.log('Win option: 7');
        document.getElementById('crossed-line-7').style.transform = 'rotate(45deg) scaleX(1)';
    }

    // [ ][ ][X]
    // [ ][X][ ]
    // [X][ ][ ]
    if (fields[2] == fields[4] && fields[4] == fields[6] && fields[2]) {
        winner = fields[2];
        console.log('Win option: 8');
        document.getElementById('crossed-line-8').style.transform = 'rotate(135deg) scaleX(1)';
    }

    if (winner) {
        console.log('Winner: ', winner);
        gameOver = true;

        // setTimeout(function() {
        //     document.getElementById('game-over').classList.remove('d-none');
        //     document.getElementById('restart-btn').classList.remove('d-none');
        // }, 1000)
    }
}

function restart() {
    gameOver = false;
    fields = [];
    document.getElementById('game-over').classList.add('d-none');
    document.getElementById('restart-btn').classList.add('d-none');

    for (let i = 1; i <= 7; i++) {
        document.getElementById(`crossed-line-${i}`).classList.add('d-none');
    }

    for (let i = 0; i <= 8; i++) {
        document.getElementById(`circle-${i}`).classList.add('d-none');
        document.getElementById(`cross-${i}`).classList.add('d-none');
    }

    document.getElementById('crossed-line-1').style.transform = 'scaleX(0)';
    document.getElementById('crossed-line-2').style.transform = 'scaleX(0)';
    document.getElementById('crossed-line-3').style.transform = 'scaleX(0)';
    document.getElementById('crossed-line-4').style.transform = 'rotate(90deg) scaleX(0)';
    document.getElementById('crossed-line-5').style.transform = 'rotate(90deg) scaleX(0)';
    document.getElementById('crossed-line-6').style.transform = 'rotate(90deg) scaleX(0)';
    document.getElementById('crossed-line-7').style.transform = 'rotate(45deg) scaleX(0)';
    document.getElementById('crossed-line-8').style.transform = 'rotate(135deg) scaleX(0)';
}