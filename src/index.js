// Comments using React
// The three tenets of Components
// Creating a Reusable, Configurable Component

import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetail";
import faker from 'faker';


const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail
        author="Sam"
        commentTime="Today at 4:45PM"
        content="This is a comment"
        avatarSrc={faker.image.avatar()}
      />
      <CommentDetail
        author="John"
        commentTime="Today at 2:10PM"
        content="Another comment"
        avatarSrc={faker.image.avatar()}
      />
      <CommentDetail
        author="Eve"
        commentTime="Yesterday at 12:15PM"
        content="Something to say"
        avatarSrc={faker.image.avatar()}
      />
    </div>
  );
};

//ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<App />, document.querySelector("#root"));
