let currentScoreHome = 0
let currentScoreGuest = 0

let scoreHome = document.getElementById("home-score")
let scoreGuest = document.getElementById("guest-score")

function addOneHome() {
    currentScoreHome += 1
    scoreHome.textContent = currentScoreHome 
    console.log(currentScoreHome)
}

function addTwoHome() {
    currentScoreHome += 2
    scoreHome.textContent = currentScoreHome 
    console.log(currentScoreHome)
}

function addThreeHome() {
    currentScoreHome += 3
    scoreHome.textContent = currentScoreHome 
    console.log(currentScoreHome)
}

function addOneGuest() {
    currentScoreGuest += 1
    scoreGuest.textContent = currentScoreGuest
    console.log(currentScoreGuest)
}

function addTwoGuest() {
    currentScoreGuest += 2
    scoreGuest.textContent = currentScoreGuest
    console.log(currentScoreGuest)
}

function addThreeGuest() {
    currentScoreGuest += 3
    scoreGuest.textContent = currentScoreGuest
    console.log(currentScoreGuest)
}

function resetBtn() {
    currentScoreGuest = 0
    currentScoreHome = 0
    scoreGuest.textContent = currentScoreGuest
    scoreHome.textContent = currentScoreHome
    console.log(currentScoreGuest)
    console.log(currentScoreHome)
    
}

