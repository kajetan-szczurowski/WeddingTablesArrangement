const container = document.getElementById('kopytko');

const table = {
  '1': 'Danuta Nawrocka',
  '2': 'Kazimierz Nawrocki',
  '3': 'Witold Predel',
  '4': 'Renata Nawrocka',
  '5': 'Józef Nawrocki',
  '6': 'Marzena Nawrocka',
  '7': 'Ireneusz Nawrocki',
  '8': 'Monika Spitzenberger',
  '9': 'Andreas Spitzenberger',
  '10': 'Grażyna Pindera'
}

const tableArray = Object.keys(table).map(id => `${id}. ${table[id]}`);

// kopytko.innerText = tableArray;

const wrapper = document.getElementById('main-wrapper');

tableArray.forEach(person => {wrapper.appendChild(createEntry(person))});

function createEntry(insideText, wrapperStyle, textStyle){
  const entry = createDivWithStyle(wrapperStyle);
  const text = createDivWithStyle(textStyle);
  text.innerText = insideText;
  entry.appendChild(text);
  return entry;
}

function createDivWithStyle(styleString){
  const element = document.createElement('div');
  element.style = styleString;
  return element;
}

function getEntryStyleString(numberOfPeople, currentPersonNumber, translate = '250px'){
  const angle = 360 / numberOfPeople;
  const currentAngle = angle * currentPersonNumber;
  
}