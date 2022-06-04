import React from "react";
import { commentsAPI } from "../components/mainAPI.js";

export const Comment = (props) => {
  const { comment, index } = [];
  console.log(comment);
  console.log(index);

  const fetchComments = async () => {
    const comments = await commentsAPI.get();
    this.setState({ comments });
    console.log("fetch API Test", comment);
  };

  return (
    <div>
      {fetchComments}
      <p>{comment}: Test</p>
    </div>
  );
};