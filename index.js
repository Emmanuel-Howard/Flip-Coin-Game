// Defining constants & variables 
let heads = 0;
let tails = 0;
let coin = document.querySelector(".coin")
let flipBtn = document.querySelector("#flipBtn")
let resetBtn = document.querySelector("#resetBtn")

flipBtn.addEventListener("click", ()=>{
    let i = Math.floor(Math.random() * 2);
    coin.computedStyleMap.animation = "none";
    if(i){
        setTimeout(function(){
            coin.style.animation = "spin-heads 3s forwards";
        }, 100);
        heads++;
    }else{
        setTimeout(function(){
            coin.style.animation = "spin-tails 3s forwards";
        }, 100);
        tails++;
    }
    setTimeout(updateStats, 3000);
    disableButton();
});

function updateStats(){
    document.querySelector("#heads-count").textContent = `Heads: $
    {heads}`;
    document.querySelector("#tails-count").textContent = `Tails: $
    {tails}`;
}

function disableBtn(){
    flipBtn.disable = true;
    setTimeout(function(){
        flipBtn.disable = false;
    }, 3000);
}

resetBtn.addEventListener("click", ()=>{
    coin.style.animation = "none";
    heads = 0;
    tails = 0;
    updateStats();