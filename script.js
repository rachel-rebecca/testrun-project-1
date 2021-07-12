// ~~declaring variables that will be used again.~~

let cardFronts = document.querySelectorAll(".card_front");

let cardBacks = document.querySelectorAll(".card_bottom");

let cardsArray = document.querySelectorAll(".card");

let hasFlipped = false; // checking if cards have been flipped or not before deciding if it is a match or not

let firstCard, secondCard; // <-- sets empty variables that will be assigned a value after our "flip" function runs.

let lockBoard = false; // variable for locking board after cards have flipped. Player cannot select more than 2 cards at a time





// written as an IIFE to automatically run when page loads
(function shuffleCards () {
    cardsArray.forEach(card => {
        let random = Math.floor(Math.random() * 16);
        card.style.order = random;
        console.log(random)
    })
    
})();





cardsArray.forEach(card => card.addEventListener("click", flipCard));
// uses classList to toggle a css class onto each card inside our .card array






function flipCard() {
    // console.log(this); //checks value for "this"
    if (lockBoard === true) {
        return;
    }

    // makes sure first card cannot be double clicked, taking both firstCard and secondCard place
    if (this === firstCard) {
        return;
    }

    this.classList.toggle("flip");

    if (hasFlipped === false) {
        // this condition means it is before the first click
        hasFlipped = true; // re-assigning value to "true" because a card has been clicked
        firstCard = this;
        // console.log(hasFlipped, firstCard) <-- we can check if it works. Whenn we click a second card, it will not work because the "false" condition can no longer be met.
    } else {
        hasFlipped = false; // hasFlipped resets to false
        secondCard = this; // second card will automatically be assigned here

        checkMatch(); // call on check for match function
    };
 
};







function checkMatch () {
    if (firstCard.dataset.name === secondCard.dataset.name) { 
     
        removeCard();// if there's a match, remove both cards

    } else {

       unflipCards(); // if there's no match, call unflip cards functions

    };

    // could also use ternary operator here.


};







function removeCard () {
    
    lockBoard = true; 
     setTimeout( () => {
        firstCard.style.visibility = "hidden";
        secondCard.style.visibility = "hidden";

 
        lockBoard = false;
        hasFlipped = false;
     }, 600);
    

};


function unflipCards () {
     // no match
    lockBoard = true; // re-assign value to true if cards are flipped

     setTimeout(() => {
        firstCard.classList.remove("flip");
        secondCard.classList.remove("flip");

        lockBoard = false;
        hasFlipped = false; // re-assign to false, to reset board
        
    }, 1500); // use setTimeout to allow second card to be able to flip still
    
};





function reset () {
   
    
}


