# Jalsa Q&A Game

Jalsa Q&A Game is a two-player trivia game built with HTML, CSS, and JavaScript. Players enter their names, choose categories, pick a difficulty level, and take turns answering questions. The game runs for a fixed number of rounds, keeps score, prevents repeated questions, and announces the winner at the end.

This project was created as part of General Assembly – Software Engineering Immersive (Project 1).

## ScreenShots 

![start form Image](./Screenshot%202025-11-27%20085552.png)

![game view Image](./Screenshot%202025-11-27%20085803.png)

## Live Demo

https://ali-albanna1.github.io/jalsa-q-and-a-game/

Open the link and play directly in the browser.

## Game Description

The game focuses on practicing:

- DOM manipulation
- Event-driven logic
- Managing UI state between screens
- Handling user input
- Updating the interface based on game progress
- Using Flexbox for layout and spacing

Players select one or more categories and choose a difficulty level. Each question is randomly selected and never repeated during the game.

## How the Game Works

### 1. Player Setup and Category Selection

Players must enter their names and choose at least one category before the game can start.

**Example (real code from the project):**

```javascript
if (player1Name.value !== '' && player2Name.value !== '' && selectedValues.length > 0 ) {
    player1N = player1Name.value;
    Player2N = player2Name.value;

    gameState.currentPlayer = player1N;
    playerTurnDisp.textContent = player1N;

    resetGame();

    formViewEl.style.display = 'none';
    gameViewEl.classList.add("active");
} else {
    alert('Please put the names and at least one category to start');
}
```
This section validates input, saves player names, and switches from the landing screen to the game screen.

### 2. Selecting Difficulty and Getting Questions
Questions are pulled from a structured gameData object (History, Science, Cars, etc.), each with easy, medium, and hard options.

```javascript
const difficulty = getSelectedDifficulty();
const category = getRandomCat();
const questionList = gameData[category][difficulty];

const availableQuestions = questionList.filter(q =>
  !gameState.usedQuestions[category].includes(q.question)
);
```
This ensures:

Random category

Difficulty chosen by the player

No repeated questions

### 3. Answering Questions and Scoring
Buttons change color based on correctness and scoring depends on difficulty:

```javascript
if (chosenAnswer === correctAnswer) {
    event.target.style.backgroundColor = 'green';
    updateScore();
} else {
    event.target.style.backgroundColor = 'red';
    highlightCorrectOption(correctAnswer);
}
Each difficulty level awards different points:

javascript
if (difficulty === 'easy') return 100;
if (difficulty === 'medium') return 200;
if (difficulty === 'hard') return 300;
```
### 4. Turn Switching and Rounds
The game alternates between players automatically:

```javascript
if (gameState.currentPlayer === player1N) {
    gameState.currentPlayer = Player2N;
} else {
    gameState.currentPlayer = player1N;
}

playerTurnDisp.textContent = gameState.currentPlayer;
Rounds increase after each answer:

javascript
gameState.round += 1;
setTimeout(checkGameOver, 600);
5. Ending the Game
After the set number of rounds, the game evaluates the winner:

javascript
if (gameState.player1Score > gameState.player2Score) {
    finalmessage = `${player1N} wins with ${gameState.player1Score} points`;
} else if (gameState.player1Score < gameState.player2Score) {
    finalmessage = `${Player2N} wins with ${gameState.player2Score} points`;
} else {
    finalmessage = `It's a draw!`;
}

alert(finalmessage);
```

## Technologies Used
HTML5 – Content structure

CSS3 – Layout and Flexbox

JavaScript (ES6) – Game logic and DOM manipulation

GitHub Pages – Deployment

## Future Enhancements

Expanded question categories

Additional players

Animations for correct and incorrect answers

Sound effects

Timer-based rounds

Mobile UI improvements

High-score leaderboard