/*-------------------------------- Constants --------------------------------*/

// data 

const gameData = {
  history: {
    easy: [
      {
        question: "What was the name of the crime boss who was head of the feared Chicago Outfit?",
        answer: "Al Capone",
        options: ["Al Capone", "Lucky Luciano", "John Dillinger", "Bugsy Siegel"]
      },
      {
        question: "What Renaissance artist is buried in Rome's Pantheon?",
        answer: "Raphael",
        options: ["Michelangelo", "Raphael", "Leonardo da Vinci", "Donatello"]
      },
      {
        question: "In what year did World War II end?",
        answer: "1945",
        options: ["1939", "1941", "1945", "1950"]
      },
      {
        question: "Which famous historical document begins with the words 'We hold these truths to be self-evident'?",
        answer: "The Declaration of Independence",
        options: ["The Magna Carta", "The Declaration of Independence", "The Bill of Rights", "The Constitution"]
      },
      {
        question: "Who was the first woman to win a Nobel Prize?",
        answer: "Marie Curie",
        options: ["Marie Curie", "Rosalind Franklin", "Ada Lovelace", "Dorothy Hodgkin"]
      },
      {
        question: "What was the code name for the Allied invasion of Normandy?",
        answer: "Operation Overlord",
        options: ["Operation Torch", "Operation Overlord", "Operation Neptune", "Operation Barbarossa"]
      }
    ],
    medium: [
      {
        question: "What year was the United Nations established?",
        answer: "1945",
        options: ["1919", "1939", "1945", "1955"]
      },
      {
        question: "Who was the last Tsar of Russia?",
        answer: "Nicholas II",
        options: ["Nicholas II", "Peter the Great", "Alexander III", "Ivan IV"]
      },
      {
        question: "Roald Amundsen was the first man to reach the South Pole, but where was he from?",
        answer: "Norway",
        options: ["Sweden", "Norway", "Denmark", "Finland"]
      },
      {
        question: "Who famously crossed the Alps with elephants on the way to war with the Romans?",
        answer: "Hannibal",
        options: ["Hannibal", "Alexander the Great", "Attila the Hun", "Julius Caesar"]
      },
      {
        question: "The Parthenon Marbles are controversially located in what museum?",
        answer: "The British Museum",
        options: ["The Louvre", "The British Museum", "The Vatican Museums", "The Metropolitan Museum of Art"]
      }
    ],
    hard: [
      {
        question: "Which powerful Mongol ruler conquered a vast empire stretching from Asia to Europe?",
        answer: "Genghis Khan",
        options: ["Kublai Khan", "Genghis Khan", "Tamerlane", "Attila the Hun"]
      },
      {
        question: "In what decade was the internet created?",
        answer: "1960s",
        options: ["1950s", "1960s", "1970s", "1980s"]
      },
      {
        question: "What was the name of the first computer virus?",
        answer: "Creeper",
        options: ["ILOVEYOU", "Creeper", "Melissa", "Brain"]
      },
      {
        question: "What was the name of the ancient Egyptian sun god?",
        answer: "Ra",
        options: ["Ra", "Osiris", "Anubis", "Horus"]
      }
    ]
  },

  science: {
    easy: [
      {
        question: "How many elements are in the periodic table?",
        answer: "118",
        options: ["112", "114", "118", "120"]
      },
      {
        question: "Which planet is closest to the sun?",
        answer: "Mercury",
        options: ["Venus", "Mercury", "Earth", "Mars"]
      }
    ],
    medium: [
      {
        question: "Which planet has the most moons?",
        answer: "Saturn",
        options: ["Jupiter", "Saturn", "Mars", "Neptune"]
      },
      {
        question: "Where is the strongest human muscle located?",
        answer: "Jaw",
        options: ["Jaw", "Leg", "Arm", "Back"]
      }
    ],
    hard: [
      {
        question: "What theory explains the origin of the universe?",
        answer: "The Big Bang Theory",
        options: ["The Big Bang Theory", "String Theory", "Steady State Theory", "Quantum Loop Theory"]
      },
      {
        question: "What was the world's first artificial satellite?",
        answer: "Sputnik 1",
        options: ["Sputnik 1", "Explorer 1", "Voyager 1", "Apollo 11"]
      }
    ]
  },

  geography: {
    easy: [
      {
        question: "Where would you be if standing on the Spanish Steps?",
        answer: "Rome",
        options: ["Paris", "Rome", "Madrid", "Athens"]
      },
      {
        question: "Which city is known as 'The Eternal City'?",
        answer: "Rome",
        options: ["Athens", "Rome", "Jerusalem", "Istanbul"]
      }
    ],
    medium: [
      {
        question: "Largest Spanish-speaking city (2025)?",
        answer: "Mexico City",
        options: ["Buenos Aires", "Madrid", "Mexico City", "Bogotá"]
      },
      {
        question: "Which country has the most islands?",
        answer: "Sweden",
        options: ["Indonesia", "Sweden", "Philippines", "Canada"]
      }
    ],
    hard: [
      {
        question: "Which is the only sea without coastlines?",
        answer: "The Sargasso Sea",
        options: ["The Sargasso Sea", "The Dead Sea", "The Black Sea", "The Caspian Sea"]
      },
      {
        question: "What is the only non-rectangular national flag?",
        answer: "Nepal",
        options: ["Switzerland", "Nepal", "Bhutan", "Vatican City"]
      }
    ]
  },

  technology: {
    easy: [
      {
        question: "What does CPU stand for?",
        answer: "Central Processing Unit",
        options: ["Central Processing Unit", "Computer Power Unit", "Central Program Utility", "Core Processing Unit"]
      },
      {
        question: "What does URL stand for?",
        answer: "Uniform Resource Locator",
        options: ["Uniform Resource Locator", "Universal Routing Link", "Unified Reference Line", "User Request Locator"]
      }
    ],
    medium: [
      {
        question: "What does HTTP stand for?",
        answer: "Hypertext Transfer Protocol",
        options: ["Hypertext Transfer Protocol", "High-Tech Transfer Process", "Hyperlink Text Protocol", "Host Transfer Protocol"]
      },
      {
        question: "What does GPU stand for?",
        answer: "Graphics Processing Unit",
        options: ["Graphics Processing Unit", "General Processing Utility", "Graphical Program Unit", "Global Processing Unit"]
      }
    ],
    hard: [
      {
        question: "Who is credited with inventing the telephone?",
        answer: "Alexander Graham Bell",
        options: ["Alexander Graham Bell", "Thomas Edison", "Nikola Tesla", "Samuel Morse"]
      },
      {
        question: "Year first iPhone was released?",
        answer: "2007",
        options: ["2005", "2006", "2007", "2008"]
      }
    ]
  }
};


const selectedValues = []

const choosenCategories = []



/* variables ---------------------------------------------------*/
let player1N = ''

let Player2N = ''

let timer = 1

let chosenAnswer

let correctAnswer

const gameState = {
    currentPlayer: 0,
    player1Score: 0,
    player2Score: 0,
    currentQuestion: null,
    usedQuestions: [], 
    isGameActive: false,
    difficultyQCount: { easy: 0, medium: 0, hard: 0 }

}



/* cached elements ---------------------------------------------------*/



const player1Name = document.querySelector('#player1-input')

const player2Name = document.querySelector('#player2-input')

const timeSetAdd = document.querySelector('#plusBtn')

const timeSetSub = document.querySelector('#minusBtn')

const startBtnEl = document.querySelector('#start-btn')

const timerDisp = document.querySelector('#timerdisplay')


const selectEl = document.querySelector('#categories')


const playerTurnDisp = document.querySelector('#player-turn')


const selectionList = document.querySelector('#choosen-categories')



const questionDispEl = document.querySelector('#question')


const radioEasyEl =document.querySelector('#level-choice1')

const radioMedEl =document.querySelector('#level-choice2')

const radioHardEl =document.querySelector('#level-choice3')


const showQBtn = document.querySelector('#show-quesbtn')


const option1El = document.querySelector('#option1')

const option2El = document.querySelector('#option2')

const option3El = document.querySelector('#option3')

const option4El = document.querySelector('#option4')

const allOpButtons = [option1El, option2El, option3El, option4El]


const player1ScoreDisp = document.querySelector('#p1-score')

const player2ScoreDisp = document.querySelector('#p2-score')

const p1NameDisp = document.querySelector('#p1-name')

const p2NameDisp = document.querySelector('#p2-name')




/* Functions ---------------------------------------------------*/

const startForm = () => {

  
    
if (player1Name.value !== '' && player2Name.value !== '' && selectedValues.length > 0 ) {

    player1N = player1Name.value


    Player2N = player2Name.value
    
    console.log(player1N  + ' ' + Player2N )

   gameState.currentPlayer = player1N

   playerTurnDisp.textContent = player1N

     p1NameDisp.textContent = player1N

    p2NameDisp.textContent = Player2N
}

else {

   
  alert('Please put the names and rest settings to start')

}
}

const addToTimer = () => {

timer += 1
timerDisp.textContent = timer
    
}

const subTimer = () => {

     if (timer > 1 ){

        (timer += -1) 

    timerDisp.textContent = timer }
    
}



const selectedCategories =  () => {

  selectedValues.length = 0

  gameState.usedQuestions = [] 

   for (let i = 0; i < selectEl.options.length; i++) {

        if (selectEl.options[i].selected) {

          selectedValues.push(selectEl.options[i].value);

           selectionList.appendChild(selectEl.options[i].cloneNode(true));

        }
      }
      console.log('Selected categories:', selectedValues);

    }

 
    const getRandomCat = () => {

      
  const index = Math.floor(Math.random() * selectedValues.length);

  return selectedValues[index];
  
}
    


function getSelectedDifficulty() {
    if (radioEasyEl.checked) { return 'easy'}

     if (radioMedEl.checked) {return 'medium' }

    if (radioHardEl.checked) {return 'hard'}

   else{return 'easy'} 
}

const getSelectedDifficultyPoints = () => {

   const difficulty = getSelectedDifficulty()

   if (difficulty === 'easy') {
      return 100
   }

    if (difficulty === 'medium') {
      return 200
   }
  

   
    if (difficulty === 'hard') {
      return 300
   }


}


const getQuestionForRound = () => {
  
     resetOptions()  

  const category = getRandomCat()

  const difficulty = getSelectedDifficulty()

  if (!category) {

    alert('Please choose at least one category')

    return
  }


  const questionList = gameData[category][difficulty]

  // filter alredy used questions 
  const availableQuestions = questionList.filter(q =>
  !gameState.usedQuestions.includes(q.question)
)

if (availableQuestions.length === 0) {

  questionDispEl.textContent = 'no more questions'

  disableOpBtn()
  
  return

}

  const randomIndex = Math.floor(Math.random() * availableQuestions.length)
  
  const question = availableQuestions[randomIndex]


  questionDispEl.textContent = question.question;


  option1El.textContent = question.options[0]

  option2El.textContent = question.options[1]

  option3El.textContent = question.options[2]

  option4El.textContent = question.options[3]

  gameState.currentQuestion = question; 

  gameState.usedQuestions.push(question.question)

  
};

// the full question with the answer and options is stored in the gamestate.currentQuestion
console.log(gameState)

const handleAnswerOptions = (event) => {
 
 chosenAnswer = event.target.textContent

correctAnswer = gameState.currentQuestion.answer

if(chosenAnswer === correctAnswer){

  event.target.style.backgroundColor = 'green'

  updateScore()
  
}

else {
      
   event.target.style.backgroundColor = 'red'
   highlightCorrectOption(correctAnswer)
   
}


   const level = getSelectedDifficulty()
    gameState.difficultyQCount[level] += 1
   
    setTimeout(checkGameOver, 600)
  
    disableOpBtn()

   
    switchTurn()

} 

const highlightCorrectOption = () => {

allOpButtons 

allOpButtons.forEach(button => {

  if(button.textContent === correctAnswer){

     button.style.backgroundColor = 'green'
  }
  
})
}

const disableOpBtn = () => {

    option1El.disabled = true

    option2El.disabled = true

    option3El.disabled = true

    option4El.disabled = true
    

}

const resetOptions =() => {
  allOpButtons

  allOpButtons.forEach(button => {
    button.style.backgroundColor = ''
    button.disabled = false
  })
}

const switchTurn = ()  => {
 if (gameState.currentPlayer === player1N)
 {
   gameState.currentPlayer = Player2N

   playerTurnDisp.textContent = Player2N
 }

 else{

    gameState.currentPlayer = player1N

    playerTurnDisp.textContent = player1N

 }

}


const updateScore = () =>  {
  
  const points = getSelectedDifficultyPoints()

  if (gameState.currentPlayer === player1N) {

    gameState.player1Score += points

    player1ScoreDisp.textContent = gameState.player1Score;

  } else {

    gameState.player2Score += points
    player2ScoreDisp.textContent = gameState.player2Score;
  }
}


const endGame = () => {

   let finalmessage = ''

  if (gameState.player1Score > gameState.player2Score ) {
    
   finalmessage = `The Winner is : ${player1N} wins with ${gameState.player1Score} points` 


  }

  else if (gameState.player1Score < gameState.player2Score ) {

    finalmessage = `The Winner is : ${Player2N} wins with ${gameState.player2Score} points`

  }

  else {

     finalmessage = `It's draw! Both Scored: ${gameState.player1Score} , ${gameState.player2Score} `
  }

  alert(finalmessage)

  showQBtn.disabled = true

  disableOpBtn()

}


const checkGameOver = () => {

  if(gameState.difficultyQCount.easy >= 2 && gameState.difficultyQCount.medium >= 2 && gameState.difficultyQCount.hard >= 2 ){

    endGame()

  }

}

/* event listener---------------------------------------------------*/

startBtnEl.addEventListener('click',startForm)

timeSetAdd.addEventListener('click',addToTimer)

timeSetSub.addEventListener('click',subTimer)

selectEl.addEventListener('change',selectedCategories) 
  
showQBtn.addEventListener('click',getQuestionForRound)
  

option1El.addEventListener('click', handleAnswerOptions)
option2El.addEventListener('click', handleAnswerOptions)
option3El.addEventListener('click', handleAnswerOptions)
option4El.addEventListener('click', handleAnswerOptions)

