// Comments using React
// The three tenets of Components
// Creating a Reusable, Configurable Component

import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail/>
    </div>
  );
};

//ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<App />, document.querySelector('#root'));
