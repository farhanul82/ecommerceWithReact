import React from "react";

const Rendercomments = ({ comment }) => {
  return (
    <div>
      <li key={comment.id}>
        <p>
          <span>{comment.name}</span>: {comment.date}
        </p>

        <p>{comment.comment}</p>
      </li>
    </div>
  );
};

export default Rendercomments;
