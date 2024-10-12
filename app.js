//tablesSourceData type = {label:string, data: {'1':'value_1', '2':'value_2', ..., 'n':'value_n'} }[]
let ADD_INDEX_TO_PERSON_NAME = true;
const wrapper = document.getElementById('main-wrapper');
const listContainer = document.querySelector('.alphabetical-list');

insertTables();
insertAlphabeticalLists();


function insertTables(){
    tablesSourceData.forEach(tableData => {
        const newTable = createTable(tableData.label, tableData.data, ADD_INDEX_TO_PERSON_NAME);
        wrapper.appendChild(newTable);
      })
}

function insertAlphabeticalLists(countByNames = true){
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

    if (countByNames) countPeopleByNames(all);
}

function countPeopleByNames(allGueastList){
    const countedPeople = {};
    allGueastList.forEach(person =>{const name = getFirstName(person); (countedPeople[name]? countedPeople[name]++: countedPeople[name] = 1)});
    const countedAndSortedPeople = Object.keys(countedPeople).map(key => {return {value: countedPeople[key], label: key}}).sort((a, b) => b.value - a.value);
    console.log(countedAndSortedPeople)
}