const gameBoard = document.querySelector('#gameboard');
const playerDisplay = document.querySelector('#player');
const infoDisplay = document.querySelector('#info-display');
const width = 8;
let playerGo = 'black';
playerDisplay.textContent = 'black';

const startPieces = [
    rook, knight, bishop, queen, king, bishop, knight, rook,
    pawn, pawn, pawn, pawn, pawn, pawn, pawn, pawn,
    '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '',
    pawn, pawn, pawn, pawn, pawn, pawn, pawn, pawn,
    rook, knight, bishop, queen, king, bishop, knight, rook
];

function createBoard () {
    startPieces.forEach((startPieces, index) => {
        const square = document.createElement('div');

        // Ajouter la classe 'square'
        square.classList.add('square');

        // Injecter les pièces du fichier pieces.js dans le HTML
        square.innerHTML = startPieces;

        // SI le premier enfant existe ? alors ajoute paramètre l'attribut "draggable" sur "true"
        square.firstChild?.setAttribute('draggable', true);
        
        // Ajouter un id unique sur chaque carré (de 1 à 64)
        square.setAttribute('square-id', index);
        
        // Ajouter la classe 'beige'
        const row = Math.floor( (63 - index) / 8 ) + 1;
        if ( row % 2 === 0 ) {
            square.classList.add(index % 2 === 0 ? 'beige' : 'brown');
        } else {
            square.classList.add(index % 2 === 0 ? 'brown' : 'beige');
        }

        if ( index <= 15 ) {
            square.firstChild.firstChild.classList.add('black');
        }
        if ( index >= 48 ) {
            square.firstChild.firstChild.classList.add('white');
        }

        // Ajouter les carrés au jeu
        gameBoard.append(square);
    })
}

createBoard ();



const allSquares = document.querySelectorAll('.square');

allSquares.forEach(square => {
    square.addEventListener('dragstart', dragStart);
    square.addEventListener('dragover', dragOver);
    square.addEventListener('drop', dragDrop);
})


let startPositionId;
let draggedElement;
function dragStart (ev) {
    console.log('start', ev.target);
    startPositionId = ev.target.parentNode.getAttribute('square-id');
    draggedElement = ev.target;
}

// Permet d'éviter d'appeler l'information "sur quelle case je passe ?" en boucle
function dragOver (ev) {
    ev.preventDefault();
}

function dragDrop (ev) {
    ev.stopPropagation();
    // console.log('playerGo', playerGo);
    console.log('e.target', ev.target);
    const correctGo = draggedElement.firstChild.classList.contains(playerGo);
    const taken = ev.target.classList.contains('piece');
    const valid = checkIfValid(ev.target);
    const opponentGo = playerGo === 'white' ? 'black' : 'white';
    // console.log('opponentGo', opponentGo);
    const takenByOpponent = ev.target.firstChild?.classList.contains(opponentGo);

    if (correctGo) {
        // check this first
        if (takenByOpponent && valid) {
            ev.target.parentNode.append(draggedElement);
            ev.target.remove();
            changePlayer();
            return
        }
        // then check this
        if (taken && !takenByOpponent) {
            infoDisplay.textContent = "You can't go here !";
            setTimeout(() => infoDisplay.textContent = "", 2000);
            return
        }

        if (valid) {
            ev.target.append(draggedElement);
            changePlayer();
            return
        }
    }



    changePlayer();
}

function changePlayer() {
    if (playerGo === 'black') {
        playerGo = 'white';
        playerDisplay.textContent = 'white';
        reverseIds();
    } else {
        revertIds();
        playerGo = 'black';
        playerDisplay.textContent = 'black';
    }
}

function reverseIds() {
    const allSquares = document.querySelectorAll('.square');
    allSquares.forEach((square, index) => square.setAttribute('square-id', (width * width - 1) - index));
}

function revertIds() {
    const allSquares = document.querySelectorAll('.square');
    allSquares.forEach((square, index) => square.setAttribute('square-id', index));
}

function checkIfValid(target) {
    const targetId = Number(target.getAttribute('square-id')) || Number(target.parentNode.getAttribute('square-id'));
    const startId = Number(startPositionId);
    const piece = draggedElement.id;
    console.log('targetId', targetId);
    console.log('startId', startId);
    console.log('piece', piece);

    switch (piece) {
        case 'pawn':
            const starterRow = [8,9,10,11,12,13,14,15];
            if (starterRow.includes(startId) && startId + width * 2 === targetId    ||
            startId + width === targetId    ||
            startId + width - 1 === targetId && document.querySelector(`[square-id="${startId + width - 1}"]`).firstChild   ||
            startId + width + 1 === targetId && document.querySelector(`[square-id="${startId + width - 1}"]`).firstChild
            ) {
                return true;
            }
            break;
            
        case 'knight':
            if (
                startId + width * 2 - 1 === targetId    ||
                startId + width * 2 + 1 === targetId    ||
                startId + width - 2 === targetId        ||
                startId + width + 2 === targetId        ||
                startId - width * 2 - 1 === targetId    ||
                startId - width * 2 + 1 === targetId    ||
                startId - width - 2 === targetId        ||
                startId - width + 2 === targetId
            ) {
                return true;
            }
            break;

        case 'bishop':
            if (
                startId + width + 1 === targetId    ||
                startId + width * 2 + 2 && !document.querySelector(`[square-id="${startId + width + 1}"]`).firstChild   ||
                startId + width * 3 + 3 && !document.querySelector(`[square-id="${startId + width + 1}"]`).firstChild && !document.querySelector(`[square-id="${startId + width * 2 + 2}"]`).firstChild   ||
                startId + width * 4 + 4 && !document.querySelector(`[square-id="${startId + width + 1}"]`).firstChild && !document.querySelector(`[square-id="${startId + width * 3 + 3}"]`).firstChild
            ) {
                return true;
            }
            break;
    
        default:
            break;
    }
}