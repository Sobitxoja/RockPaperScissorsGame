let score = JSON.parse(localStorage.getItem('score'))

if(!score){

  score = {
    win: 0,
    lose:  0,
    tie: 0
  }

};

updateScoreElement();




function playGame(playerMove){

  const computerMove = pickComputerMove();
  let result;

  if(playerMove === 'Rock'){

    if(computerMove === 'Rock'){
      result = 'Tie';
    }else if(computerMove === 'Paper'){
      result = 'You lose';
    }else{
      result = 'You win';
    }

  }if(playerMove === 'Paper'){

    if(computerMove === 'Rock'){
      result = 'You win';
    }else if(computerMove === 'Paper'){
      result = 'Tie';
    }else{
      result = 'You lose';
    }

  }if(playerMove === 'Scissors'){

    if(computerMove === 'Rock'){
      result = 'You lose';
    }else if(computerMove === 'Paper'){
      result = 'You win';
    }else{
      result = 'Tie';
    }

  }

  if(result === 'You win'){
    score.win ++;
  }else if(result === 'You lose'){
    score.lose ++;
  }else{
    score.tie ++;
  }

  localStorage.setItem('score', JSON.stringify(score))

  updateScoreElement();

  document.querySelector('.js-result')
    .innerHTML = result;

  document.querySelector('.js-moves')
    .innerHTML = `You
<img src="${playerMove}-emoji.png" alt="" class="move-icone">
<img src="${computerMove}-emoji.png" alt="" class="move-icone">
Computer`

}


function updateScoreElement(){

  document.querySelector('.js-score')
   .innerHTML = `Wins: ${score.win}, Loses: ${score.lose}, Ties: ${score.tie}`;

}


function pickComputerMove(){
  
  const randomNumber = Math.random()
  let computerMove;

  if(randomNumber >= 0 && randomNumber < 0.33){
    computerMove = 'Rock';
  }else if(randomNumber >= 0.33 && randomNumber < 0.644){
    computerMove = 'Paper';
  }else{  
    computerMove = 'Scissors';
  }

  return computerMove;

}

