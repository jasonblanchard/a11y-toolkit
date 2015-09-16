var a11yToolkit = require('../index.js');

function handleClick() {
  console.log('should be announcing');
  a11yToolkit.announce('this is an announcement', 'assertive');
}

document.getElementById('announce').addEventListener('click', handleClick);

console.log('included');
