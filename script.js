const wrapper = document.getElementById('main-wrapper');

tablesSourceData.forEach(tableData => {
  const newTable = createTable(tableData.label, tableData.data);
  wrapper.appendChild(newTable);
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
