import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  return (
    <div> 
      <legend>Three tenets of Components</legend>
      <ul>
        <li>Nesting</li>
        <li>Reusability</li>
        <li>Configuration</li>
      </ul>
    </div>
  );
};

//ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<App />, document.querySelector('#root'));
