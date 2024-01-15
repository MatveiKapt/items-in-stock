const table = document.querySelector('.table');
const headRowTemplate = document.querySelector('#head-row-template').content;
const tableRowTemplate = document.querySelector('#table-row-template').content;

const makeTableRow = (data) => {
  const tableRow = tableRowTemplate.cloneNode(true);

  const tableRowNumber = tableRow.querySelector('.number');
  const tableRowName = tableRow.querySelector('.title');
  const tableRowPrice = tableRow.querySelector('.price');
  const tableRowDate = tableRow.querySelector('.date');

  const {number, name, price, date} = data;

  tableRowNumber.textContent = number;
  tableRowName.textContent = name;
  tableRowPrice.textContent = price;
  tableRowDate.textContent = date;

  return tableRow;
};

const renderTable = (data) => {
  const headRow = headRowTemplate.cloneNode(true);
  table.innerHTML = '';
  table.appendChild(headRow);

  const tableRowsFragment = document.createDocumentFragment();

  data.forEach((itemData, index) => {
    const finishedData = {
      number: index + 1,
      ...itemData
    }
    tableRowsFragment.appendChild(makeTableRow(finishedData));
  });

  table.appendChild(tableRowsFragment);
};

export {renderTable};