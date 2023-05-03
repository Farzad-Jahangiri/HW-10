const list = document.getElementById('list');
let input = '';

function createListItem() {
  input = prompt('Enter an item for the list');
  if (input === null || input === '') {
    return;
  }
  const listItem = document.createElement('li');
  listItem.textContent = input;
  list.appendChild(listItem);
  createListItem();
}

createListItem();
