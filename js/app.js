/*-------------------------------- Constants --------------------------------*/

// data 

const gameData = {
  history: {
    easy: [
      {
        question: "Who was the first President of the United States?",
        answer: "George Washington",
        options: ["George Washington", "Abraham Lincoln", "Thomas Jefferson", "John Adams"]
      },
      {
        question: "In what year did World War II end?",
        answer: "1945",
        options: ["1939", "1941", "1945", "1950"]
      },
      {
        question: "Which famous ship sank in 1912?",
        answer: "Titanic",
        options: ["Titanic", "Britannic", "Olympic", "Lusitania"]
      },
      {
        question: "Who wrote the Declaration of Independence?",
        answer: "Thomas Jefferson",
        options: ["Thomas Jefferson", "Benjamin Franklin", "John Hancock", "James Madison"]
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
        question: "Who famously crossed the Alps with elephants?",
        answer: "Hannibal",
        options: ["Hannibal", "Alexander the Great", "Attila the Hun", "Julius Caesar"]
      },
      {
        question: "The Parthenon Marbles are kept in which museum?",
        answer: "The British Museum",
        options: ["The Louvre", "The British Museum", "The Vatican Museums", "The Metropolitan Museum of Art"]
      }
    ],
    hard: [
      {
        question: "Which empire was ruled by Genghis Khan?",
        answer: "The Mongol Empire",
        options: ["The Mongol Empire", "The Ottoman Empire", "The Persian Empire", "The Roman Empire"]
      },
      {
        question: "In what decade was the internet created?",
        answer: "1960s",
        options: ["1950s", "1960s", "1970s", "1980s"]
      },
      {
        question: "What was the name of the first computer virus?",
        answer: "Creeper",
        options: ["Creeper", "ILOVEYOU", "Melissa", "Brain"]
      },
      {
        question: "Which war ended with the Treaty of Versailles?",
        answer: "World War I",
        options: ["World War I", "World War II", "Cold War", "Napoleonic Wars"]
      }
    ]
  },

  science: {
    easy: [
      {
        question: "What gas do humans breathe in to survive?",
        answer: "Oxygen",
        options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Helium"]
      },
      {
        question: "Which planet is closest to the sun?",
        answer: "Mercury",
        options: ["Venus", "Mercury", "Earth", "Mars"]
      },
      {
        question: "What is H2O commonly known as?",
        answer: "Water",
        options: ["Water", "Hydrogen", "Salt", "Oxygen"]
      },
      {
        question: "How many planets are in the Solar System?",
        answer: "8",
        options: ["7", "8", "9", "10"]
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
      },
      {
        question: "What force keeps us on the ground?",
        answer: "Gravity",
        options: ["Gravity", "Magnetism", "Friction", "Pressure"]
      },
      {
        question: "What is the speed of light?",
        answer: "299,792 km/s",
        options: ["150,000 km/s", "299,792 km/s", "1,000,000 km/s", "30,000 km/s"]
      }
    ],
    hard: [
      {
        question: "What is the powerhouse of the cell?",
        answer: "Mitochondria",
        options: ["Mitochondria", "Nucleus", "Ribosome", "Chloroplast"]
      },
      {
        question: "What is the chemical symbol for gold?",
        answer: "Au",
        options: ["Ag", "Au", "Go", "Gd"]
      },
      {
        question: "What element has the highest melting point?",
        answer: "Tungsten",
        options: ["Tungsten", "Iron", "Carbon", "Platinum"]
      },
      {
        question: "What particle has a positive charge?",
        answer: "Proton",
        options: ["Proton", "Electron", "Neutron", "Photon"]
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
      },
      {
        question: "What is the largest continent?",
        answer: "Asia",
        options: ["Europe", "Asia", "Africa", "North America"]
      },
      {
        question: "Which ocean is the largest?",
        answer: "Pacific Ocean",
        options: ["Pacific Ocean", "Atlantic Ocean", "Indian Ocean", "Arctic Ocean"]
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
      },
      {
        question: "Which country is nicknamed 'The Land of Fire and Ice'?",
        answer: "Iceland",
        options: ["Iceland", "Greenland", "Norway", "Finland"]
      },
      {
        question: "Which river is the longest in the world?",
        answer: "Nile",
        options: ["Amazon", "Nile", "Yangtze", "Mississippi"]
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
      },
      {
        question: "What is the largest desert in the world?",
        answer: "Antarctic Desert",
        options: ["Sahara", "Gobi", "Arabian", "Antarctic Desert"]
      },
      {
        question: "Which is the smallest country in the world?",
        answer: "Vatican City",
        options: ["Vatican City", "Monaco", "Nauru", "San Marino"]
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
      },
      {
        question: "What device stores long-term data?",
        answer: "Hard Drive",
        options: ["RAM", "Hard Drive", "CPU", "GPU"]
      },
      {
        question: "What does Wi-Fi allow you to do?",
        answer: "Connect wirelessly to the internet",
        options: [
          "Connect wirelessly to the internet",
          "Charge devices",
          "Cool your PC",
          "Increase battery life"
        ]
      }
    ],

    medium: [
      {
        question: "What does HTTP stand for?",
        answer: "Hypertext Transfer Protocol",
        options: [
          "Hypertext Transfer Protocol",
          "High-Tech Transfer Process",
          "Hyperlink Text Protocol",
          "Host Transfer Protocol"
        ]
      },
      {
        question: "What does GPU stand for?",
        answer: "Graphics Processing Unit",
        options: [
          "Graphics Processing Unit",
          "General Processing Utility",
          "Graphical Program Unit",
          "Global Processing Unit"
        ]
      },
      {
        question: "What company created the Android operating system?",
        answer: "Google",
        options: ["Google", "Apple", "Microsoft", "Samsung"]
      },
      {
        question: "What technology is used to make calls over the internet?",
        answer: "VoIP",
        options: ["VoIP", "NFC", "Bluetooth", "RFID"]
      }
    ],

    hard: [
      {
        question: "Who is credited with inventing the telephone?",
        answer: "Alexander Graham Bell",
        options: [
          "Alexander Graham Bell",
          "Thomas Edison",
          "Nikola Tesla",
          "Samuel Morse"
        ]
      },
      {
        question: "Year first iPhone was released?",
        answer: "2007",
        options: ["2005", "2006", "2007", "2008"]
      },
      {
        question: "What does SSL provide for websites?",
        answer: "Encryption",
        options: ["Encryption", "Storage", "Hosting", "Speed Optimization"]
      },
      {
        question: "What does the 'T' stand for in 'IoT'?",
        answer: "Things",
        options: ["Technology", "Transmission", "Terminal", "Things"]
      }
    ]
  },

  cars: {
    easy: [
      {
        question: "Which company makes the Corolla?",
        answer: "Toyota",
        options: ["Toyota", "Honda", "Nissan", "Kia"]
      },
      {
        question: "Which company uses the Mustang name?",
        answer: "Ford",
        options: ["Ford", "Chevrolet", "Dodge", "Jeep"]
      },
      {
        question: "What fuel does a Tesla use?",
        answer: "Electricity",
        options: ["Gasoline", "Diesel", "Electricity", "Hybrid"]
      },
      {
        question: "Which country is BMW from?",
        answer: "Germany",
        options: ["Germany", "Japan", "USA", "Italy"]
      }
    ],
    medium: [
      {
        question: "What does RPM stand for?",
        answer: "Revolutions Per Minute",
        options: ["Rounds Per Meter", "Revolutions Per Minute", "Rotations Per Motor", "Rate Per Mile"]
      },
      {
        question: "Which brand produces the 'Civic'?",
        answer: "Honda",
        options: ["Honda", "Hyundai", "Toyota", "Mazda"]
      },
      {
        question: "Which car is known as the 'Godzilla'?",
        answer: "Nissan GT-R",
        options: ["Nissan GT-R", "Toyota Supra", "Dodge Challenger", "Chevrolet Camaro"]
      },
      {
        question: "Which country manufactures Volvo?",
        answer: "Sweden",
        options: ["Sweden", "Germany", "USA", "UK"]
      }
    ],
    hard: [
      {
        question: "Which company created the first hybrid car?",
        answer: "Toyota (Prius)",
        options: ["Toyota (Prius)", "Honda", "Ford", "Nissan"]
      },
      {
        question: "What is the fastest street-legal production car in 2025?",
        answer: "Bugatti Chiron Super Sort 300+",
        options: ["Bugatti Chiron Super Sort 300+", "Koenigsegg Jesko", "Hennessey Venom F5", "Rimac Nevera"]
      },
      {
        question: "What does ABS stand for?",
        answer: "Anti-lock Braking System",
        options: ["Anti-lock Braking System", "Advanced Brake Stability", "Automatic Braking System", "Active Balance System"]
      },
      {
        question: "Which engine type has no pistons?",
        answer: "Rotary engine",
        options: ["Rotary engine", "V8 engine", "Inline-6 engine", "Boxer engine"]
      }
    ]
  }
};



const selectedValues = []

/* variables ---------------------------------------------------*/
let player1N = ''

let Player2N = ''

let chosenAnswer

let correctAnswer

const gameState = {
  currentPlayer: 0,
  player1Score: 0,
  player2Score: 0,
  currentQuestion: null,
  usedQuestions: {
    history: [],
    science: [],
    geography: [],
    technology: [],
    cars: []
  },
  isGameActive: false,
  difficultyQCount: { easy: 0, medium: 0, hard: 0 },
  round: 1,          
  totalRounds: 10    
}



/* cached elements ---------------------------------------------------*/



const player1Name = document.querySelector('#player1-input')

const player2Name = document.querySelector('#player2-input')

const startBtnEl = document.querySelector('#start-btn')

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

const formViewEl = document.querySelector('#start-form')

const gameViewEl = document.querySelector('#game-view')

const landingScreenEl = document.querySelector("#landing-screen")

const messageBox = document.querySelector("#message-box")

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


    resetGame()


    questionDispEl.textContent = '?'

    

    landingScreenEl.style.display = "none" 

    gameViewEl.classList.add("active")

    
}

else {

   
  showMessageBox('Please put the names and at least one category to start')

}
}


const selectedCategories =  () => {

  selectedValues.length = 0

  selectionList.innerHTML = ''

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

    if (gameState.round > gameState.totalRounds) {
    showMessageBox("Game is over! Please restart to play again.")
    return
    }

  if (!isDifficultySelected()){
    showMessageBox('Please select difficullty level before showing question')
    return
    }

  
     resetOptions()  

  const category = getRandomCat()

  const difficulty = getSelectedDifficulty()

  if (!category) {

    showMessageBox('Please choose at least one category')

    return
  }


  const questionList = gameData[category][difficulty]

  const availableQuestions = questionList.filter(q =>
  !gameState.usedQuestions[category].includes(q.question)
)

if (availableQuestions.length === 0) {

  questionDispEl.textContent = 'no more questions in this categories/difficulty'

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

  gameState.usedQuestions[category].push(question.question)

  
}


const handleAnswerOptions = (event) => {

  if (!gameState.isGameActive) { return}
 
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

    gameState.round += 1
   
    setTimeout(checkGameOver, 600)
  
    disableOpBtn()

   
    switchTurn()

} 

const highlightCorrectOption = (answer) => {

allOpButtons 

allOpButtons.forEach(button => {

  if(button.textContent === answer){

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

  showMessageBox(finalmessage, true)

  showQBtn.disabled = true

  disableOpBtn()

  gameState.isGameActive = false;


}


const checkGameOver = () => {

  if(gameState.round > gameState.totalRounds ){

    endGame()

  }

}


const isDifficultySelected = () => {
  return (
    radioEasyEl.checked ||radioMedEl.checked ||radioHardEl.checked
  )
}

const resetGame = () => {

  gameState.player1Score = 0

  gameState.player2Score = 0

  gameState.usedQuestions = {
    history: [],
    science: [],
    geography: [],
    technology: [],
    cars: []
  };

  gameState.round = 1
  gameState.totalRounds = 10

  player1ScoreDisp.textContent = 0
  player2ScoreDisp.textContent = 0
  
  showQBtn.disabled = false

  disableOpBtn()

  gameState.isGameActive = true

}


const showMessageBox = (text, persistent=false) => {

  messageBox.textContent = text

  messageBox.style.display = "block"

  if(!persistent) {

  setTimeout(() => {messageBox.style.display = "none"}, 5000)

  }

}

/* event listener---------------------------------------------------*/

startBtnEl.addEventListener('click',startForm)


selectEl.addEventListener('change',selectedCategories) 
  
showQBtn.addEventListener('click',getQuestionForRound)
  

option1El.addEventListener('click', handleAnswerOptions)
option2El.addEventListener('click', handleAnswerOptions)
option3El.addEventListener('click', handleAnswerOptions)
option4El.addEventListener('click', handleAnswerOptions)

console.log(gameState)