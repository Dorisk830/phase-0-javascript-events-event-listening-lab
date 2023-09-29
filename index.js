const input = document.addEventListener('input');

function clickAlert() {
  alert('I was clicked!');

}
input.addEventListener('click',clickAlert);
