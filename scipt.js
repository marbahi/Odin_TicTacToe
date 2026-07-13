const player1 = { name, mark: "X"};
const player2 = { name, mark: "O"};

const modal = document.querySelector(".modal");

const getP1Name = document.querySelector("#p1_name");
const getP2Name = document.querySelector("#p2_name");

const board = {
    layer1: ["","",""],
    layer2: ["","",""],
    layer3: ["","",""]
}

let turns = 0;

function GamesBoard(){
    modal.showModal();
}

function Turn(marked){
    if (turns < 9) {
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

        console.log(board);

        if ((board.layer1[0] === "X" && board.layer1[1] === "X" && board.layer1[2] === "X") ||
            (board.layer2[0] === "X" && board.layer2[1] === "X" && board.layer2[2] === "X") ||
            (board.layer3[0] === "X" && board.layer3[1] === "X" && board.layer3[2] === "X") || 
            (board.layer1[0] === "X" && board.layer2[0] === "X" && board.layer3[0] === "X") ||
            (board.layer1[1] === "X" && board.layer2[1] === "X" && board.layer3[1] === "X") ||
            (board.layer1[2] === "X" && board.layer2[2] === "X" && board.layer3[2] === "X") ||
            (board.layer1[0] === "X" && board.layer2[1] === "X" && board.layer3[2] === "X") ||
            (board.layer1[2] === "X" && board.layer2[1] === "X" && board.layer3[0] === "X")){
            console.log("Player 1 Win!!");
            
            turns = 0;
            for(let i = 0; i < 3; i++){
                board.layer1[i] = "";
                board.layer2[i] = "";
                board.layer3[i] = "";
            }
        } else if ((board.layer1[0] === "X" && board.layer1[1] === "X" && board.layer1[2] === "X") ||
            (board.layer2[0] === "O" && board.layer2[1] === "O" && board.layer2[2] === "O") ||
            (board.layer3[0] === "O" && board.layer3[1] === "O" && board.layer3[2] === "O") || 
            (board.layer1[0] === "O" && board.layer2[0] === "O" && board.layer3[0] === "O") ||
            (board.layer1[1] === "O" && board.layer2[1] === "O" && board.layer3[1] === "O") ||
            (board.layer1[2] === "O" && board.layer2[2] === "O" && board.layer3[2] === "O") ||
            (board.layer1[0] === "O" && board.layer2[1] === "O" && board.layer3[2] === "O") ||
            (board.layer1[2] === "O" && board.layer2[1] === "O" && board.layer3[0] === "O")){
            console.log("Player 2 Win!!");
            
            turns = 0;
            for(let i = 0; i < 3; i++){
                board.layer1[i] = "";
                board.layer2[i] = "";
                board.layer3[i] = "";
            }
        }
    } else {
        console.log("Game Draw");
        
        turns = 0;
        for(let i = 0; i < 3; i++){
            board.layer1[i] = "";
            board.layer2[i] = "";
            board.layer3[i] = "";
        }
    }
}

const startButton = document.querySelector("#startBtn");
startButton.addEventListener("click", (e) => {
    player1.name = getP1Name.value;
    player2.name = getP2Name.value;

    console.log(player1.name);
    console.log(player2.name);

    modal.close()
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

const play = GamesBoard();