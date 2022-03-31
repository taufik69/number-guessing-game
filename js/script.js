// let input = document.querySelector('.input');
// let nam = document.querySelector('.nam');
// let btn = document.querySelector('.btn');


// function greeting(pera){
//     input.style.display = 'none';
//     nam.innerHTML = 'Assamoalakum ' + pera;
//     nam.style.background = 'red';
//     nam. style.fontSize = '100px';
//     nam.style.textAlign = 'center';
//     btn.style.display = 'none';


// }

// btn.addEventListener('click',function(){    
//     let argu = input.value;
//     greeting(argu);
// });



// let input = document.querySelector('.input');
// let nam = document.querySelector('.nam');
// let btn = document.querySelector('.btn');

// btn.addEventListener('click',function(){
//     input.style.display = 'none';
    
//     if (input.value >= 18 && input.value <= 120) {
//         nam.innerHTML = 'You are applicabel for Voting system';  
//         nam.style.color = 'green';      
//     }
//     else if (input.value > 0 && input.value < 18) {
//         nam.innerHTML = 'You Are Not Applicable For Voting System';
//         nam.style.color = 'red';
//     }
//     else if (input.value <= 0) {
//         nam.innerHTML = 'You Are Deliver Wrong Input';
//         nam.style.color = 'red';

//     }
//     else if (input.value > 120 && input.value <= 150) {
//         nam.innerHTML = 'Sala Boira toi vote diye ki korbi';
//         nam.style.color = 'purple'
//     }
//     else{
//         nam.innerHTML = 'Something Wrong Again try';
//         nam.style.color = 'red';
//     }
// });



let range_alert = document.querySelector('.range-alert');
let player1 = document.querySelector('.player1');
let start = document.querySelector('.start');
let player2 = document.querySelector('.player2');
let player2guess = document.querySelector('.player2_guess');
let player2_filed = document.querySelector('.player2_filed');
let guess = document.querySelector('.guess');
let result = document.querySelector('.result');
let game_over = document.querySelector('.game_over');


let player1input = 0;
let player2_chance = 3;


start.addEventListener('click',function(){
    if(player1.value >=1 && player1.value <=9) {
        console.log(player1.value);
        // palyer 2 task start 

        player2.innerHTML = 'player 2';
        player2.style.color = 'white';
        player2guess.innerHTML = `Guess the number (1-9) <br> You have ${player2_chance} chances`;
        player2guess.style.color = 'red';
        
        // player 1 input field and start btn gonna vanish

        player1.style.display = 'none';
        start.style.display = 'none';

        // when player 1 filed and actoin button are gone then appear the player 2 input and guess btn.
        player2_filed.style.display = 'block';
        guess.style.display = 'block';

       
        // now player1 input hold the player1input variable.
        player1input = player1.value;
        
    }
    else{
        
        range_alert.innerHTML = '! input must be in 1 - 9 Try again !'
        range_alert.style.color = 'red';
       
    }

    // when click the guess button then counting and match the desire n
        guess.addEventListener('click',function(){
        // console.log('player 1 value '+ player1input);
        // console.log('player 2 guess value '+ player2_filed.value);

        player2_chance--;
        player2guess.innerHTML = `You have ${player2_chance} chance`;
        
        if(player2_chance == 0) {
            guess.style.display = 'none';
            game_over.innerHTML = '**Game over**';
            game_over.style.fontSize = '200px';
            game_over.style.color = 'red';

            guess.style.display = 'none';
            player2guess.style.display = 'none';
            player2guess.style.display = 'none';
            player2_filed.style.display = 'none';
        }
        
        if(player1input == player2_filed.value) {
            result.innerHTML = '**congratulation your prediction Right**';
            result.style.fontSize = '100px';
            result.style.color = 'red';
            
            guess.style.display = 'none';
            player2guess.style.display = 'none';
            player2guess.style.display = 'none';
            player2_filed.style.display = 'none';
            
        }
        else{
            result.innerHTML = 'Your prediction is wrong';
        }
    });
});





















