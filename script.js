let player = "O"
const jsConfetti = new JSConfetti()
let gameActive = true
let count = 0


function playerClick(cellid) {
    if (gameActive) {
        if (player == "O") {
            if (document.getElementById(cellid).innerHTML == '') {
                document.getElementById(cellid).innerHTML = "O"
                count++
            }
            else {
                alert("Double click is not allowed")
            }
            checkWinner()
            player = "X"
            if (gameActive) {
                document.getElementById('turn').innerHTML = "X's turn"
                count++
            } else {
                document.getElementById('turn').innerHTML = ''
            }
        }
        else {
            if (document.getElementById(cellid).innerHTML == '') { document.getElementById(cellid).innerHTML = "X" }
            else { alert("Double click is not allowed") }
            checkWinner()
            player = "O"
            if (gameActive) { document.getElementById('turn').innerHTML = "O's turn" }
            else { document.getElementById('turn').innerHTML = "" }
        }
    }
    else {
        alert("Please restart the game")
    }
}



function checkWinner() {
    let c1 = document.getElementById('cell1').innerHTML
    let c2 = document.getElementById('cell2').innerHTML
    let c3 = document.getElementById('cell3').innerHTML
    let c4 = document.getElementById('cell4').innerHTML
    let c5 = document.getElementById('cell5').innerHTML
    let c6 = document.getElementById('cell6').innerHTML
    let c7 = document.getElementById('cell7').innerHTML
    let c8 = document.getElementById('cell8').innerHTML
    let c9 = document.getElementById('cell9').innerHTML


    if (player == c1 && player == c2 && player == c3) {
        document.getElementById('result').innerHTML = player + " is the winner"
        jsConfetti.addConfetti()
        gameActive = false
    }
    else if (player == c4 && player == c5 && player == c6) {
        document.getElementById('result').innerHTML = player + " is the winner"
        jsConfetti.addConfetti()
        gameActive = false
    }
    else if (player == c7 && player == c8 && player == c9) {
        document.getElementById('result').innerHTML = player + " is the winner"
        jsConfetti.addConfetti()
        gameActive = false
    }
    else if (player == c1 && player == c4 && player == c7) {
        document.getElementById('result').innerHTML = player + " is the winner"
        jsConfetti.addConfetti()
        gameActive = false
    }
    else if (player == c2 && player == c5 && player == c8) {
        document.getElementById('result').innerHTML = player + " is the winner"
        jsConfetti.addConfetti()
        gameActive = false
    }
    else if (player == c3 && player == c6 && player == c9) {
        document.getElementById('result').innerHTML = player + " is the winner"
        jsConfetti.addConfetti()
        gameActive = false
    }
    else if (player == c1 && player == c5 && player == c9) {
        document.getElementById('result').innerHTML = player + " is the winner"
        jsConfetti.addConfetti()
        gameActive = false
    }
    else if (player == c3 && player == c5 && player == c7) {
        document.getElementById('result').innerHTML = player + " is the winner"
        jsConfetti.addConfetti()
        gameActive = false
    }


    if(count==9 && gameActive){
        document.getElementById('result').innerHTML = "Game Drawn"
        gameActive = false
    }
}




function restart() {
    window.location = "index.html"
}