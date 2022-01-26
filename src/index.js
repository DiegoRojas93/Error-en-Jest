import React from 'react';
import ReactDom from 'react-dom';

import '@styles/style.css';

const $root = document.querySelector('#root')

ReactDom.render(<h1>Hello React!</h1>, $root)