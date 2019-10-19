import React from "react";

const Publication = ({id, title, text }) => {
  return (
    <article className="publication" data-id={id}>
      <h2>{title}</h2>
      <p>{text}</p>
    </article>
  );
};
export default Publication