const body = document.querySelector('body');
const header = document.createElement('header');
const h1 = document.createElement('h1');

h1.textContent = 'Whats up?';
header.appendChild(h1);
body.appendChild(header);
