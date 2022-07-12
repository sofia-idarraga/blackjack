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

const cards = [
  //card1,
  // card2,
  // card3,
  card4,
  card5,
  card6,
  card7,
  card8,
  card9,
  card10,
  //  card11,
  //card12,
  card13,
  //card14,
];

const suits = ["♠", "♥", "♣", "♦"];

const randomCard = () => {
  let cardId = Math.floor(Math.random() * cards.length);
  let suitId = Math.floor(Math.random() * suits.length);
  let card = cards[cardId];
  let suit = suits[suitId];
  card.addSuit(suit);
  return card;
};

function selectCard(selectedCards) {
  let newcard = randomCard();
  while (selectedCards.includes(newcard)) {
    newcard = randomCard();
  }
  return newcard;
}

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

function checkWin(sum) {
  if (sum >= 18 && sum <= 21) {
    console.log("You win! ");
    return true;
  }
  console.log("You lose! ");
  return false;
}

function checkSum(win) {
  if (win) {
    return 1000;
  }
  return 0;
}

function secondRound(gain, playerCards) {
  console.log("SECOND ROUND!!. ");
  console.log(playerCards);
  const firstCard2 = selectCard(playerCards);
  isA(firstCard2);
  playerCards.push(firstCard2);
  console.log(playerCards);

  const secondCard2 = selectCard(playerCards);
  isA(secondCard2);
  playerCards.push(secondCard2);
  console.log(playerCards);

  sum = firstCard2.value + secondCard2.value;
  console.log("Your sum is: " + sum);
  let win = checkWin(sum);
  gain += checkSum(win);
  console.log("You gain: " + gain);
}

function startGame() {
  let sum = 0;
  let gain = 0;
  const playerCards = [];

  const firstCard = selectCard(playerCards);
  isA(firstCard);
  playerCards.push(firstCard);
  console.log(playerCards);

  const secondCard = selectCard(playerCards);
  isA(secondCard);
  playerCards.push(secondCard);
  console.log(playerCards);

  sum = firstCard.value + secondCard.value;
  console.log("Your sum is: " + sum);
  let win = checkWin(sum);
  gain += checkSum(win);
  console.log("You gain: " + gain);

  if (win) {
    let input = prompt("Do you wanna continue playing?: (Y/N)");
    while (input != "Y" && input != "N") {
      console.log("Invalid input. ");
      input = prompt("Do you wanna continue playing?: (Y/N)");
    }
    if (input === "Y") {
      secondRound(gain, playerCards);
    }
  }
  console.log("See ya next time ;)");
}

startGame();
