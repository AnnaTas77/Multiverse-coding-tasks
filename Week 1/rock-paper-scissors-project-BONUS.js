//Rock, Paper, Scissors Bonus Challenges
// Stretch: Rock, Paper, Scissors, Lizard, Spock

// Imports the built-in readline module provided by Node.js.
const readline = require("readline/promises");

const randomChoice = () => {
  const choice = Math.floor(Math.random() * 5);
  if (choice === 0) return "rock";
  if (choice === 1) return "paper";
  if (choice === 2) return "scissors";
  if (choice === 3) return "spock";
  if (choice === 4) return "lizard";
};

const winner = (player1Choice, player2Choice) => {
  if (
    (player1Choice !== "rock" &&
      player1Choice !== "paper" &&
      player1Choice !== "scissors" &&
      player1Choice !== "lizard" &&
      player1Choice !== "spock") ||
    (player2Choice !== "rock" &&
      player2Choice !== "paper" &&
      player2Choice !== "scissors" &&
      player2Choice !== "lizard" &&
      player2Choice !== "spock")
  ) {
    return "Invalid input. Please try again.";
  }

  if (player1Choice === player2Choice) {
    return "It's a tie!";
  }

  if (
    (player1Choice === "rock" && player2Choice === "scissors") ||
    (player1Choice === "rock" && player2Choice === "lizard") ||
    (player1Choice === "paper" && player2Choice === "rock") ||
    (player1Choice === "paper" && player2Choice === "spock") ||
    (player1Choice === "scissors" && player2Choice === "paper") ||
    (player1Choice === "scissors" && player2Choice === "lizard") ||
    (player1Choice === "spock" && player2Choice === "rock") ||
    (player1Choice === "spock" && player2Choice === "scissors") ||
    (player1Choice === "lizard" && player2Choice === "paper") ||
    (player1Choice === "lizard" && player2Choice === "spock")
  ) {
    return "Player 1 Wins!";
  }

  if (
    (player2Choice === "rock" && player1Choice === "scissors") ||
    (player2Choice === "rock" && player1Choice === "lizard") ||
    (player2Choice === "paper" && player1Choice === "rock") ||
    (player2Choice === "paper" && player1Choice === "spock") ||
    (player2Choice === "scissors" && player1Choice === "paper") ||
    (player2Choice === "scissors" && player1Choice === "lizard") ||
    (player2Choice === "spock" && player1Choice === "rock") ||
    (player2Choice === "spock" && player1Choice === "scissors") ||
    (player2Choice === "lizard" && player1Choice === "paper") ||
    (player2Choice === "lizard" && player1Choice === "spock")
  ) {
    return "Player 2 Wins!";
  }
};

const score = (gameObject) => {
  if (gameObject.result.includes("1")) {
    gameObject.player1score += 1;
  }

  if (gameObject.result.includes("2")) {
    gameObject.player2score += 1;
  }

  if (gameObject.result.includes("tie")) {
    return;
  }
};

// Creates a readline interface that we can use in our code.
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function handleUserInput(userInput, gameState) {
  const player2 = randomChoice();
  gameState.result = winner(userInput, player2);

  console.log("Player 1 chose: ", userInput);
  console.log("Player 2 chose: ", player2);
  console.log(gameState.result);

  score(gameState);

  console.log(
    `Round: ${gameState.round} \n Player 1 (You): ${gameState.player1score}\n Player 2: ${gameState.player2score}`
  );
}

async function askQuestions() {
  const gameState = {
    player1choice: "",
    player2choice: "",
    result: "",
    round: 0,
    player1score: 0,
    player2score: 0,
  };
  let i = 10;
  while (i > 0) {
    let userAnswer;
    if (gameState.result === "Invalid input. Please try again.") {
      userAnswer = await rl.question(
        "Please make a choice - rock/paper/scissors/lizard/spock? - "
      );
    }

    if (gameState.result !== "Invalid input. Please try again.") {
      i -= 1;
      userAnswer = await rl.question(
        "Please make a choice - rock/paper/scissors/lizard/spock? - "
      );
      gameState.round += 1;
    }
    handleUserInput(userAnswer, gameState);
  }
}

askQuestions();
