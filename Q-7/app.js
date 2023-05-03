const toggleBtn = document.getElementById('toggle-btn');
const menu = document.getElementById('menu');

toggleBtn.addEventListener('click', function() {
  if (menu.style.display === 'none') {
    menu.style.display = 'block';
    toggleBtn.textContent = 'Sweeties (click me)!';
  } else {
    menu.style.display = 'none';
    toggleBtn.textContent = 'Sweeties (click me)!';
  }
});
