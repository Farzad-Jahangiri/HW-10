const closeButtons = document.querySelectorAll(".close");


closeButtons.forEach(function(button) {
  button.onclick = function() {
    
    let message = this.parentElement;
    message.remove();
  }
});
