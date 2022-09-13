let homeScoreBtnOne = document.getElementById("HomePlus1")
let homeStoreEl = document.getElementById("home-score")
let homeScore = 0

function increaseHomeScoreOne(){
    homeScore += 1
    homeStoreEl.textContent = homeScore
}

let homeScoreBtnTwo = document.getElementById("HomePlus2")

function increaseHomeScoreTwo(){
    homeScore += 2
    homeStoreEl.textContent = homeScore
}

let homeScoreBtnThr = document.getElementById("HomePlus3")

function increaseHomeScoreThr(){
    homeScore += 3
    homeStoreEl.textContent = homeScore
}


let guestScoreBtnOne = document.getElementById("guestPlus1")
let guestStoreEl = document.getElementById("guest-score")
let guestScore = 0

function increaseGuestScoreOne(){
    guestScore += 1
    guestStoreEl.textContent = guestScore
}

let guestScoreBtnTwo = document.getElementById("guestPlus2")

function increaseGuestScoreTwo(){
    guestScore += 2
    guestStoreEl.textContent = guestScore
}

let guestScoreBtnThr = document.getElementById("guestPlus3")

function increaseGuestScoreThr(){
    guestScore += 3
    guestStoreEl.textContent = guestScore
}
