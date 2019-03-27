import _ from 'lodash';
import './style.css';
import printMe from './print.js';

if (process.env.NODE_ENV !== 'production') {
  console.log('DEVELOPMENT MODE');
}

function component() {
  let element = document.createElement('div');
  let btn = document.createElement('button');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  btn.innerHTML = 'click me';

  btn.onclick = printMe;

  element.appendChild(btn);

  return element;
}

document.body.appendChild(component());

if (module.hot) {
  module.hot.accept('./print.js', function() {
    console.log('accepting');
    printMe();
  });
}
