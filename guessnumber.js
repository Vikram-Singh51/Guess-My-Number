'use strict';

let secretNumber = Math.trunc(Math.random()*20)+1;
let score = 20;
let highscore = 0;

document.querySelector('.reset').addEventListener('click', function(){
      score = 20;
      secretNumber = Math.trunc(Math.random()*20)+1;

       document.querySelector('.message').textContent = 'guessing...'
       document.querySelector('.score').textContent = score;
       document.querySelector('.number').textContent = '?'
       document.querySelector('.guess').value = ''
  
      document.querySelector('body').style.backgroundColor = '#222';

      document.querySelector('.number').style.width = '15rem';
}); 


document.querySelector('.check').addEventListener('click', function(){
      const guess = Number(document.querySelector('.guess').value);
      console.log(guess, typeof guess);

      if(!guess){
            document.querySelector('.message').textContent = "No Number Here";
            // displayMessage('No Number')

      } else if(guess === secretNumber){
            // displayMessage('Correct Number')
            document.querySelector('.message').textContent =' 🏆 Correct Number!';

            document.querySelector('.number').textContent = secretNumber;
            
            document.querySelector('body').style.backgroundColor = '#60b347';

            document.querySelector('.number').style.width = '30rem';
            
            if (score > highscore) {
                  highscore = score;
                  document.querySelector('.highscore').textContent = highscore;
                }
            

      }
      // else if(guess !== secretNumber){
      //       if(score >1){
      //             document.querySelector('.message').textContent = guess > secretNumber ? 'Too High'  : 'Too Low';
      //       }
      // }
      
      
      
      else if(guess > secretNumber){
            if(score > 0){
                  document.querySelector('.message').textContent = "Too High!";
            score--;
            document.querySelector('.score').textContent = score;
            }else{
                  document.querySelector('.message').textContent = "You Lost the Game"; 
            }

            
      }else if(guess< secretNumber){

            if(score > 0){
            document.querySelector('.message').textContent = 'Too Low!';
            score--;
            document.querySelector('.score').textContent = score;
            }else{
                  document.querySelector('.message').textContent = "You Lost the Game";
            }
            }     
});



document.querySelector('.check').addEventListener("keyup", function(){
      document.querySelector('.check').click();
      // if (keyCode === 13) {
      //     // Check if Enter key is pressed
      //     document.querySelector('.check').click();
      //     // Trigger button click
      // }
  });

 