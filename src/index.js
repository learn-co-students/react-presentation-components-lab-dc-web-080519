import React from 'react';
import ReactDOM from 'react-dom';

import SimpleComponent from './components/SimpleComponent';
import SimplerComponent from './components/SimplerComponent';





ReactDOM.render(
  <div>
    <h5>Simple Component</h5>
    <SimpleComponent />

    <h5>Simpler Component</h5>
    <SimplerComponent handleClick={() => alert('😀')} />
  </div>,
  document.getElementById('root')
);
