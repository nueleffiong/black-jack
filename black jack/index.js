const deck = [];
const suits = ['hearts', 'diamonds', 'spades', 'clubs'];
const values = ['ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'jack', 'queen', 'king'];

// Initialize deck
function createDeck() {
  deck.length = 0;
  for (let suit in suits) {
    for (let value in values) {
      deck.push(values[value] + ' of ' + suits[suit]);
    }
  }
  return deck;
}

// Shuffle deck
function shuffleDeck() {
  for (let i = 0; i < deck.length; i++) {
    let randomIndex = Math.trunc(Math.random() * deck.length);
    let temp = deck[i];
    deck[i] = deck[randomIndex];
    deck[randomIndex] = temp;
  }
  return deck;
}

// Deal a card
function dealCard() {
  return deck.shift();
}

// Update the HTML to show player's hand
function showPlayerHand() {
  document.querySelector('#player-hand').innerHTML = 'Your hand: ' + playerHand.join(', ');
}

// Update the HTML to show dealer's hand
function showDealerHand() {
  document.querySelector('#dealer-hand').innerHTML = 'Dealer\'s hand: ' + dealerHand.join(', ');
}

// Player turn: hit or stand
let playerHand = [];
let dealerHand = [];

document.querySelector('#hit-button').addEventListener('click',
