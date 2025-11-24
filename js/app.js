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

/* variables ---------------------------------------------------*/
let player1N = ''

let Player2N = ''

let timer = 1


/* cached elements ---------------------------------------------------*/



const player1Name = document.querySelector('#player1-input')

const player2Name = document.querySelector('#player2-input')

const timeSetAdd = document.querySelector('#plusBtn')

const timeSetSub = document.querySelector('#minusBtn')

const startBtnEl = document.querySelector('#start-btn')

const timerDisp = document.querySelector('#timerdisplay')


const selectEl = document.querySelector('#categories')



/* Functions ---------------------------------------------------*/

const startForm = () => {

    
if (player1Name.value !== '' && player2Name.value !== '' && selectedValues.length > 0 ) {

    player1N = player1Name.value

    Player2N = player2Name.value

    console.log(player1N  + ' ' + Player2N )

   
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

   for (let i = 0; i < selectEl.options.length; i++) {

        if (selectEl.options[i].selected) {

          selectedValues.push(selectEl.options[i].value);
        }
      }
      console.log('Selected categories:', selectedValues);
    }



/* event listener---------------------------------------------------*/

startBtnEl.addEventListener('click',startForm)

timeSetAdd.addEventListener('click', addToTimer)

timeSetSub.addEventListener('click', subTimer)

selectEl.addEventListener('change', selectedCategories) 
  
  
  

