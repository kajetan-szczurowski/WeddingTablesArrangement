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


const wrapper = document.getElementById('main-wrapper');
let index = 0;
tableArray.forEach(person =>{

const [containerStyle, textStyle] = getEntryStyleString(tableArray.length, index);
const newEntry = createEntry(person, textStyle);
console.log(person, containerStyle);
newEntry.style.transform = containerStyle;
newEntry.classList.add('circle');
wrapper.appendChild(newEntry);
index++;
  
});

function createEntry(insideText, textStyle){
  const entry = createDivWithStyle();
  const text = createDivWithStyle(textStyle);
  text.innerText = insideText;
  entry.appendChild(text);
  return entry;
}

function createDivWithStyle(styleString){
  const element = document.createElement('div');
  if (styleString) element.style = styleString;
  return element;
}

function getEntryStyleString(numberOfPeople, currentPersonNumber, translate = '200px'){
  const angle = 360 / numberOfPeople;
  const currentAngle = angle * currentPersonNumber;
  const wrapperStyle = `rotate(${currentAngle}deg) translateX(${translate})`;
  return [wrapperStyle, `transform: rotate(-${currentAngle}deg)`]
}
