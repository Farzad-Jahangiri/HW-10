function clearList() {
    const list = document.getElementById("my-list");
    clear(list);
  }
  
  function clear(elem) {
    while (elem.firstChild) {
      elem.removeChild(elem.firstChild);
    }
  }
  