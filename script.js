const game = () => {
    let playerScore = 0;
    let computerScore = 0;
    let moves = 0;
 
 
    const playGame = () => {
        const rockBtn = document.querySelector('.rock');
        const paperBtn = document.querySelector('.paper');
        const scissorBtn = document.querySelector('.scissor');
        const playerOptions = [rockBtn,paperBtn,scissorBtn];
        const computerOptions = ['kő','papír','olló']
         

        playerOptions.forEach(option => {
            option.addEventListener('click',function(){
 
                const movesLeft = document.querySelector('.movesleft');
                moves++;
                movesLeft.innerText = `Hátralévő körök: ${10-moves}`;
                 
 
                const choiceNumber = Math.floor(Math.random()*3);
                const computerChoice = computerOptions[choiceNumber];
 
                winner(this.innerText,computerChoice)
                 
                if(moves == 10){
                    gameOver(playerOptions,movesLeft);
                }
            })
        })
         
    }
 

    const winner = (player, computer) => {
        const result = document.querySelector('.result');
        const playerScoreBoard = document.querySelector('.p-count');
        const computerScoreBoard = document.querySelector('.c-count');
        player = player.toLowerCase();
        computer = computer.toLowerCase();
        if(player === computer){
            result.textContent = 'Döntetlen'
        }
        else if(player == 'kő'){
            if(computer == 'papír'){
                
                result.textContent = 'Számítógép nyert!';
                computerScore++;
                computerScoreBoard.textContent = computerScore;
 
            }else{
                result.textContent = 'Játékos nyert!'
                playerScore++;
                playerScoreBoard.textContent = playerScore;
            }
        }
        else if(player == 'olló'){
            if(computer == 'kő'){
                result.textContent = 'Számítógép nyert!';
                computerScore++;
                computerScoreBoard.textContent = computerScore;
            }else{
                result.textContent = 'Játékos nyert!';
                playerScore++;
                playerScoreBoard.textContent = playerScore;
            }
        }
        else if(player == 'papír'){
            if(computer == 'olló'){
                result.textContent = 'Számítógép nyert!';
                computerScore++;
                computerScoreBoard.textContent = computerScore;
            }else{
                result.textContent = 'Játékos nyert!';
                playerScore++;
                playerScoreBoard.textContent = playerScore;
            }
        }
    }
 
    const gameOver = (playerOptions,movesLeft) => {
 
        const chooseMove = document.querySelector('.move');
        const result = document.querySelector('.result');
        const reloadBtn = document.querySelector('.reload');
 
        playerOptions.forEach(option => {
            option.style.display = 'none';
        })
 
      
        chooseMove.innerText = 'Játék vége!'
        movesLeft.style.display = 'none';
 
        if(playerScore > computerScore){
            result.style.fontSize = '2rem';
            result.innerText = 'Megnyerted a játékot!'
            result.style.color = 'white';
        }
        else if(playerScore < computerScore){
            result.style.fontSize = '2rem';
            result.innerText = 'Elvesztetted a játékot!';
            result.style.color = 'white';
        }
        else{
            result.style.fontSize = '2rem';
            result.innerText = 'Döntetlen';
            result.style.color = 'white'
        }
        reloadBtn.innerText = 'Újra';
        reloadBtn.style.display = 'flex'
        reloadBtn.addEventListener('click',() => {
            window.location.reload();
        })
    }
 
 
    playGame();
     
}
 
game();