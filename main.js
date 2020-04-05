function game(){
    var choice = ["rock", "paper", "scissor"]

    var valg = choice[Math.floor(Math.random()*choice.length)];

    console.log(valg);

}

game();
