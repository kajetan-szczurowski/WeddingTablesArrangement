//tablesSourceData type = {label:string, data: {'1':'value_1', '2':'value_2', ..., 'n':'value_n'} }[]
const wrapper = document.getElementById('main-wrapper');
const listContainer = document.querySelector('.alphabetical-list');

tablesSourceData.forEach(tableData => {
  const newTable = createTable(tableData.label, tableData.data);
  wrapper.appendChild(newTable);
})

const peopleWithoutTableName = tablesSourceData.map(source => source.data);
const alphabeticalList = [];
const all = [];
peopleWithoutTableName.forEach(oneTable => {
    const keys = Object.keys(oneTable);
    const results = keys.map(key => {all.push(oneTable[key]); return reverseFullName(oneTable[key])});
    alphabeticalList.push(results.sort());
})


alphabeticalList.forEach(sortedTable => {
  const newWrapper = document.createElement('ul');
  const items = sortedTable.map(person => getListItemWithText(fullNameArrayIntoNiceString(person)));
  newWrapper.append(...items);
  listContainer.appendChild(newWrapper);
})





function createTable(label, people){
  const newTable = createTableWrapper(label);
  const tableArray = Object.keys(people).map(id => `${id}. ${people[id]}`);

  let index = 0;
  tableArray.forEach(person =>{

    const [containerStyle, textStyle] = getEntryStyleString(tableArray.length, index);
    const newEntry = createEntry(person, textStyle);
    newEntry.style.transform = containerStyle;
    newEntry.classList.add('circle');
    newTable.appendChild(newEntry);
    index++;
  
  });

  return newTable;

}

function getListItemWithText(text){
  const li = document.createElement('li');
  li.innerText = text;
  return li;
}

function createTableWrapper(label){
  const newTable = createDivWithClass('tableWrapper');
  const tableLabel = createDivWithClass('label');
  const tableGraphic = createDivWithClass('table');
  tableLabel.innerText = label;
  newTable.append(tableGraphic, tableLabel);
  return newTable;
}

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

function createDivWithClass(className){
  const element = document.createElement('div');
  if (className) element.classList.add(className);
  return element;
}

function getEntryStyleString(numberOfPeople, currentPersonNumber, translate = '200px'){
  const angle = 360 / numberOfPeople;
  const currentAngle = angle * currentPersonNumber;
  const wrapperStyle = `rotate(${currentAngle}deg) translateX(${translate})`;
  return [wrapperStyle, `transform: rotate(-${currentAngle}deg)`]
}

function fullNameArrayIntoNiceString(fullNameArray){
  return `${fullNameArray[0]} ${fullNameArray[1]}`;
}


function reverseFullName(nameAndSurname){
    const separated = nameAndSurname.split(" ");
    return [separated[1], separated[0]];
}