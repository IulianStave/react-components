// Comments using React
// The three tenets of Components
// Creating a Reusable, Configurable Component

import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail author="Sam"/>
      <CommentDetail author="Alina"/>
      <CommentDetail author="Eve"/>
    </div>
  );
};

//ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<App />, document.querySelector('#root'));
