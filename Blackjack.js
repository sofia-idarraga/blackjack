const readline = require("readline");
const prompt = require("prompt-sync")();

let answer = "";

class Card {
  constructor(pip, value) {
    this.pip = pip;
    this.value = value;
  }
  addSuit(suit) {
    this.suit = suit;
  }

  setValue(value) {
    this.value = value;
  }

  getDetails() {
    return `Pip is ${this.pip},
    Value is: ${this.value}, 
    Suit is ${this.suit}`;
  }
}

let card1 = new Card("1", 1);
let card2 = new Card("2", 2);
let card3 = new Card("3", 3);
let card4 = new Card("4", 4);
let card5 = new Card("5", 5);
let card6 = new Card("6", 6);
let card7 = new Card("7", 7);
let card8 = new Card("8", 8);
let card9 = new Card("9", 9);
let card10 = new Card("10", 10);
let card11 = new Card("J", 11);
let card12 = new Card("Q", 11);
let card13 = new Card("K", 11);
let card14 = new Card("A", 11);

let cards = [
  //  card1,
  // card2,
  // card3,
  // card4,
  // card5,
  //  card6,
  //  card7,
  //  card8,
  //  card9,
  //  card10,
  //  card11,
  //card12,
  card13,
  card14,
];

const suits = ["♠", "♥", "♣", "♦"];

//To get inputs
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const randomCard = () => {
  const cardId = Math.floor(Math.random() * cards.length);
  const suitId = Math.floor(Math.random() * suits.length);
  let card = cards[cardId];
  card.addSuit(suits[suitId]);
  return card;
};

const selectCard = (selectedCards) => {
  let card = randomCard();
  selectedCards.forEach((element) => {
    while (element.pip === card.pip && element.suit === card.suit) {
      card = randomCard();
    }
  });
  return card;
};

const isA = (card) => {
  if (card.pip === "A") {
    let input = prompt("Your A's value is 11 or 1? (11/1): ");
    let entrance = Number(input);
    while (entrance != 1 && entrance != 11) {
      input = prompt("Your entrance is not valid, please write it again: ");
      entrance = Number(input);
    }
    card.setValue(entrance);
    console.log(card);
  }
};

function startGame() {
  let selectedCards = [];
  //TO DO: Add the first 2 cards randomly to the user
  //Math.random() - 0 - cards.length

  const firstCard = selectCard(selectedCards);
  isA(firstCard);
  selectedCards.push(firstCard);
  console.log(selectedCards);

  const secondCard = selectCard(selectedCards);
  isA(secondCard);
  selectedCards.push(secondCard);
  console.log(selectedCards);
}

startGame();
