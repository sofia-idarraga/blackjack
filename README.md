# Blackjack

**_By: Sofía Idárraga_**


---

## Instructions

For this activity you will finish blackjack game adding and changing some parts:

1. Appy an OOP approach for Cards and Players: Define them as objects
2. Player now will earn a price: $1000 if he makes Blackjack or the sum is beetween 18 and 21.
3. Set rounds: Ask player if he wants to continue playing in order to increase his/her price

### Using the code

Once the complete code is downloaded, you need to install the dependencies (like prompt-sync). (Make sure you are in the project ubication)

```
npm install
```

---

## Evidence

To test the program I run the project with some selected cards in order to see some cases of interest, let's see:

- **Selecting A's value:**
  In this three images you can see how the user is able to decide the value 11 or 1, and when the user input and invalid value the program continue asking until a correct value is input
  ![AsValue](https://github.com/sofia-idarraga/blackjack/blob/95468c5a101b8a687844a3b8cc097ea402dc198b/evidence/sc1.PNG)
  ![AsValue2](https://github.com/sofia-idarraga/blackjack/blob/95468c5a101b8a687844a3b8cc097ea402dc198b/evidence/sc2.PNG)
  ![AsValue3](https://github.com/sofia-idarraga/blackjack/blob/f5863209e06e776e4f07f32e210e6d5d58e492a0/evidence/sc6.PNG)

  - **Sum and de deny continue:**
    Here you can see how the sum is correct, also when the player win is asked to continue, if the answer is n/N, the program stop

![sum](https://github.com/sofia-idarraga/blackjack/blob/f5863209e06e776e4f07f32e210e6d5d58e492a0/evidence/sc3.PNG)

- **What if I win and want to continue?**
  Here you can see how, if the player wants, can continue with the game and the gain sums +1000 each time they wins. also you can see how, even thought a little quantity of cards were enable, it are not repeated
  ![continue](https://github.com/sofia-idarraga/blackjack/blob/f5863209e06e776e4f07f32e210e6d5d58e492a0/evidence/sc4.PNG)

  -**Normal game**
  Here you can see a normal game with all the cards enable. (With a little of bad luck)
  ![normal](https://github.com/sofia-idarraga/blackjack/blob/f5863209e06e776e4f07f32e210e6d5d58e492a0/evidence/sc5.PNG)
