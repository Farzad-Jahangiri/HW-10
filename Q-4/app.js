function createTree(container, data) {
    let ul = document.createElement('ul');
    container.appendChild(ul);
    for (let key in data) {
      let li = document.createElement('li');
      li.innerHTML = key;
      ul.appendChild(li);
      if (typeof(data[key]) == "object" && Object.keys(data[key]).length > 0) {
        createTree(li, data[key]);
      }
    }
  }
  let data = {
    "Fish": {
      "trout": {},
      "salmon": {}
    },
    "Tree": {
      "Huge": {
        "sequoia": {},
        "oak": {}
      },
      "Flowering": {
        "apple tree": {},
        "magnolia": {}
      }
    }
  };
  let container = document.getElementById('container');
  createTree(container, data);  