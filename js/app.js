// console.log('its working yo!');

// User Story

// - user inputs their name through a prompt.
// - score, rounds, and high score are recorded in the header above the device.

// - the console is displayed in the center of the page with four buttons (red, green, yellow, blue).
// - buttons change opacity with a toggle when clicked. 

// - the computer “Simon” lights up buttons in a random order.
// -the user must reproduce that order by clicking the buttons.

// -for each successful reproduction, a point is awarded to the player.
// - each Round continues until mistake is made by the user. 


// Nice-to have
// - buttons produce a specific tone when clicked

// step one
    // create a button
    //add a litener to the button which will trigger the console to start the game.


// step two
    // create a function that causes a toggle opacity on each color
    //create a listener that logs the buttons clicked into an array.

// step 3
    //create an array for the computers "button sequence"
    // each round it should loop through and add new combinations to the array

//step 4
    // create a function that compares the computers sequence at index [0] to the players click event

// step 5
    // create fucntions that update the score, round and highscore. 



// startGame = () => {
//     $('button').on('click', ()=> {
//         createSequence();
//         triggerSequence();
// })




let userSequence =[];

//////////////button listeners//////////////////////

$('.button-yellow').on('click', (event)=> {
        $(`.button-yellow`).css('filter', 'brightness(100%)');
        setTimeout(function(){
            $(`.button-yellow`).css('filter', 'brightness(70%)');
        }, 300)
    userSequence.push("yellow");
    compareSequence(event);
})

$('.button-red').on('click', (event)=> {
    $(`.button-red`).css('filter', 'brightness(100%)');
    setTimeout(function(){
        $(`.button-red`).css('filter', 'brightness(70%)');
    }, 300)
    userSequence.push("red");
    compareSequence(event);
})

$('.button-green').on('click', (event)=> {
    $(`.button-green`).css('filter', 'brightness(100%)');
    setTimeout(function(){
        $(`.button-green`).css('filter', 'brightness(70%)');
    }, 300)
    userSequence.push("green");
    compareSequence(event);
    
})

$('.button-blue').on('click', (event)=> {
    $(`.button-blue`).css('filter', 'brightness(100%)');
    setTimeout(function(){
        $(`.button-blue`).css('filter', 'brightness(70%)');
    }, 300)
    userSequence.push("blue");
    compareSequence(event);
})



///////////////////computer sequence functions///////////////

const buttons = [$('.button-yellow').text(), $('.button-red').text(), $('.button-green').text(), $('.button-blue').text()];
let computerSequence = [];

createSequence = () => {
for (let i=0; i<2; i++) {
    let c = (Math.floor(Math.random() * (buttons.length)));
    computerSequence.push(buttons[c]);
}
    return computerSequence;
}

triggerSequence = () => {
    let time = 500;
    computerSequence.forEach((color)=> {
        setTimeout(function() {
            $(`.button-${color}`).css('filter', 'brightness(100%)');
            setTimeout(function(){
                $(`.button-${color}`).css('filter', 'brightness(50%)');
            }, time = 500)
        }, time += 500);
    }) 
}



//////////////// score board functions /////////////////

let $score = 0;
updateScore = () => {
    $('.score').text(`Score: ${$score}`);
}
let $round = 1;
updateRound = () => {
    $('.round').text(`Round: ${$round}`);
}

let $newHighscore = 0;
endOfRound = () => {
    if ($newHighscore <= $score){
        $newHighscore = $score;
    } 
    $('.high-score').text(`High Score: ${$newHighscore}`)
}

compareSequence = () => {
    for(let step in userSequence){
        console.log(userSequence[step], computerSequence[step])
        if(userSequence[step] === computerSequence[step]){
            console.log(true)
            if(parseInt(step) === computerSequence.length-1){
                userSequence=[];
                $score ++;
                updateScore();
                createSequence();
                triggerSequence();
            }
        } else {
            console.log(false)
                computerSequence=[];
                userSequence=[];
                $round ++;
                updateRound();
                endOfRound();
                $score = 0;
                updateScore();
                
        }
        
    }
}

////////////// Start game / round ////////////////////

    $('button').on('click', ()=> {
        createSequence();
        triggerSequence();
    })
