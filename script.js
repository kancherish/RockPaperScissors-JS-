 let userScore = 0;
 let computerScore = 0;
 let rounds = 0;

        indexing ={
            "rock":0,
            "paper":1,
            "scissors":2
        }
        outcomes = [
            [0,-1,1],
            [1,0,-1],
            [-1,1,0]
        ]

        function getComputerChoice(){
            choices = ["rock","paper","scissors"];
            return choices[Math.floor(Math.random()*3)]
        }

        function playRound(playerSelection, computerSelection) {
            outcome = outcomes[indexing[playerSelection]][indexing[computerSelection]];
            result = "";
            if(outcome>0){
                result = `You Won! ${playerSelection.toUpperCase()} beats ${computerSelection.toUpperCase()}`;
                userScore+=1;
            }else if(outcome<0){
                result = `You Lose! ${computerSelection.toUpperCase()} beats ${playerSelection.toUpperCase()}`;
                computerScore+=1;
            }else{
                result = "Its a Tie!";
            }
            return result;
        }

        function game(userChoice){
            if (rounds>=5){
                if(userScore>computerScore){
                    window.alert("You Won!,Reload Page to play Again");
                    }
                else if(userScore<computerScore){
                    window.alert("You Lost!,Reload Page to play Again");
                    }
                else{
                    window.alert("Its a tie ,Reload Page to play Again");
                    }
                
                }
            const playerSelection = userChoice.toLowerCase();
            const computerSelection = getComputerChoice();
            
            let computerChoice = document.querySelector(".compCh");
            computerChoice.innerText = " "+computerSelection.toUpperCase();
            
            let result = document.querySelector(".result");
            result.innerText= playRound(playerSelection.toLowerCase(), computerSelection);
            
            let userPoints = document.querySelector(".userScore");
            userPoints.innerText = " " + userScore;
            
            let compPoints = document.querySelector(".compScore");
            compPoints.innerText = " " + computerScore;
            
            rounds+=1;
            
        } 
        
        btList = document.querySelectorAll(".userChoice");
           for(bt of btList){
            bt.addEventListener('click',(e)=>{
                game(e.target.textContent)
                })
            
        }
        console.log(`Your Final Score ${score}`)
        
       
        
        
