// Comments using React
// The three tenets of Components
// Creating a Reusable, Configurable Component

import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard.js";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail
          author="Sam"
          commentTime="Today at 4:45PM"
          content="This is a comment"
          avatarSrc={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="John"
          commentTime="Today at 2:10PM"
          content="Another comment"
          avatarSrc={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Eve"
          commentTime="Yesterday at 12:15PM"
          content="Something to say"
          avatarSrc={faker.image.avatar()}
        />
      </ApprovalCard>
    </div>
  );
};

//ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<App />, document.querySelector("#root"));
