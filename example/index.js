var announce = require('../index.js');

function handleClick() {
  console.log('should be announcing');
  announce('this is an announcement');
}

document.getElementById('announce').addEventListener('click', handleClick);

console.log('included');
