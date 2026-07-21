const player1 = { name, mark: "X", winner: 0, score: 0};
const player2 = { name, mark: "O", winner: 0, score: 0};

const initModal = document.querySelector(".initModal");
const endModal = document.querySelector(".endModal");


const board = {
    layer1: ["","",""],
    layer2: ["","",""],
    layer3: ["","",""]
}

let turns = 0;

function initalGame(){
    initModal.showModal();
}

let markedSpot = document.querySelectorAll(".trow .tcolumn")
markedSpot.forEach(spot => {

    spot.addEventListener("click", () => {
        
        if (turns < 9 && (player1.winner === 0 && player2.winner === 0)) {
            const marked = document.createElement("p");

            if (spot.dataset.value < 3) {
                if (board.layer1[spot.dataset.value] === "") {
                    if (turns%2 === 0) {
                        marked.textContent = player1.mark;
                        marked.classList.add("x");
                    } else {
                        marked.textContent = player2.mark;
                        marked.classList.add("o");
                    }
                    marked.classList.add("mrkdSptd");
                    spot.appendChild(marked);
                    Turn(spot.dataset.value);
                }
            } else if (spot.dataset.value > 2 && spot.dataset.value < 6) {
                    if (board.layer2[spot.dataset.value - 3] === "") {
                        if (turns%2 === 0) {
                        marked.textContent = player1.mark;
                        marked.classList.add("x");
                    } else {
                        marked.textContent = player2.mark;
                        marked.classList.add("o");
                    }
                    marked.classList.add("mrkdSptd");
                    spot.appendChild(marked);
                    Turn(spot.dataset.value);
                } 
            } else if (spot.dataset.value > 5 && spot.dataset.value < 9) {
                    if (board.layer3[spot.dataset.value - 6] === "") {
                        if (turns%2 === 0) {
                        marked.textContent = player1.mark;
                        marked.classList.add("x");
                    } else {
                        marked.textContent = player2.mark;
                        marked.classList.add("o");
                    }
                    marked.classList.add("mrkdSptd");
                    spot.appendChild(marked);
                    Turn(spot.dataset.value);
                }
            } 
        } 
        
        if(turns === 9 && (player1.winner === 0 && player2.winner === 0)){
            console.log("Game Draw");
            endGame();
    
        }
    })
})

function Turn(marked){
    if (turns%2 === 0){
        console.log("Player 1's Marked at " + marked);
        if (marked < 3){
            if (board.layer1[marked] === "") {
                board.layer1[marked] = player1.mark;
                turns ++;
            } else {
                console.log("Choose another spot!");
            }
        } else if (marked > 2 && marked < 6) {
            if (board.layer2[marked - 3] === "") {
                board.layer2[marked - 3] = player1.mark;
                turns ++;
            } else {
                console.log("Choose another spot!");
            }
        } else if (marked > 5 && marked < 9) {
            if (board.layer3[marked - 6] === "") {
                board.layer3[marked - 6] = player1.mark;
                turns ++;
            } else {
                console.log("Choose another spot!");
            }
        }
    } else {
        console.log("Player 2's Marked at " + marked);
        if (marked < 3){
            if (board.layer1[marked] === "") {
                board.layer1[marked] = player2.mark;
                turns ++;
            } else {
                console.log("Choose another spot!");
            }
        } else if (marked > 2 && marked < 6) {
            if (board.layer2[marked - 3] === "") {
                board.layer2[marked - 3] = player2.mark;
                turns ++;
            } else {
                console.log("Choose another spot!");
            }
        } else if (marked > 5 && marked < 9) {
            if (board.layer3[marked - 6] === "") {
                board.layer3[marked - 6] = player2.mark;
                turns ++;
            } else {
                console.log("Choose another spot!");
            }
        }
    }

    console.log(turns)
    console.log(board);

    if ((board.layer1[0] === "X" && board.layer1[1] === "X" && board.layer1[2] === "X") ||
        (board.layer2[0] === "X" && board.layer2[1] === "X" && board.layer2[2] === "X") ||
        (board.layer3[0] === "X" && board.layer3[1] === "X" && board.layer3[2] === "X") || 
        (board.layer1[0] === "X" && board.layer2[0] === "X" && board.layer3[0] === "X") ||
        (board.layer1[1] === "X" && board.layer2[1] === "X" && board.layer3[1] === "X") ||
        (board.layer1[2] === "X" && board.layer2[2] === "X" && board.layer3[2] === "X") ||
        (board.layer1[0] === "X" && board.layer2[1] === "X" && board.layer3[2] === "X") ||
        (board.layer1[2] === "X" && board.layer2[1] === "X" && board.layer3[0] === "X")){
        
        player1.winner = 1;
        player1.score++;
        console.log("Player 1 Win!!");
        endGame();
    
    } else if ((board.layer1[0] === "X" && board.layer1[1] === "X" && board.layer1[2] === "X") ||
        (board.layer2[0] === "O" && board.layer2[1] === "O" && board.layer2[2] === "O") ||
        (board.layer3[0] === "O" && board.layer3[1] === "O" && board.layer3[2] === "O") || 
        (board.layer1[0] === "O" && board.layer2[0] === "O" && board.layer3[0] === "O") ||
        (board.layer1[1] === "O" && board.layer2[1] === "O" && board.layer3[1] === "O") ||
        (board.layer1[2] === "O" && board.layer2[2] === "O" && board.layer3[2] === "O") ||
        (board.layer1[0] === "O" && board.layer2[1] === "O" && board.layer3[2] === "O") ||
        (board.layer1[2] === "O" && board.layer2[1] === "O" && board.layer3[0] === "O")){
        
        player2.winner = 1;
        player2.score++;
        console.log("Player 2 Win!!");
        endGame();
    
    }
}

function endGame() {
    const statement = document.querySelector(".words");
    statement.textContent = "";
    if(player1.winner === 1) {
        statement.textContent = "Congratulation Player 1 WIN!!!!";
    } else if (player2.winner === 1) {
        statement.textContent = "Congratulation Player 2 WIN!!!!";
    } else if (player1.winner === 0 && player2.winner === 0) {
        statement.textContent = "Both Player Draw";
    }

    const p1Score = document.querySelector(".one .Score");
    const p2Score = document.querySelector(".two .Score");

    p1Score.textContent = player1.score;
    p2Score.textContent = player2.score;

    endModal.show()

    const restartGame = document.querySelector("#restartBtn");
    const againGame = document.querySelector("#againBtn");
    const markedSpot = document.querySelectorAll(".mrkdSptd")

    restartGame.addEventListener("click", () => {
        endModal.close();

        player1.score = 0;
        player2.score = 0;

        player1.winner = 0;
        player2.winner = 0;

        for (let i = 0; i < 3; i++) {
            board.layer1[i] = "";
            board.layer2[i] = "";
            board.layer3[i] = "";
        } 

        initalGame();
        turns = 0;
    })

    againGame.addEventListener("click", () => {
        endModal.close();
        
        player1.winner = 0;
        player2.winner = 0;

        for (let i = 0; i < 3; i++) {
            board.layer1[i] = "";
            board.layer2[i] = "";
            board.layer3[i] = "";
        } 

        turns = 0;
    })

    markedSpot.forEach(mark => {
        mark.remove();
    })
}

const startButton = document.querySelector("#startBtn");
startButton.addEventListener("click", (e) => {
    const getP1Name = document.querySelector("#p1_name");
    const getP2Name = document.querySelector("#p2_name");
    
    player1.name = getP1Name.value;
    player2.name = getP2Name.value;

    console.log(player1.name);
    console.log(player2.name);

    initModal.close()
})
// Untuk game
// Membuat player
// Selanjutnya membuat sebuah papan
// lalu player pertama input data ke dalam papan
// maka huruf X / O akan muncul
// Setelah itu ganti giliran
// player kedua input data ke dalam papan
// maka huruf X / O akan muncul
// dilakukan sampai ada orang yang memiliki 3 O / X secara diagonal, horizontal, dan Vertikal
// jika ada, maka player tersebut menang, dan player lain kalah
// jika tidak ada, maka draw
// ulang permainan

const play = initalGame();