import React from 'react';
import ReactDOM from 'react-dom';
import Index from './Index';

const wrapper = document.createElement('div');
wrapper.setAttribute('id', 'wrapper');
document.body.appendChild(wrapper);
ReactDOM.render(<Index />, document.getElementById('wrapper'));
