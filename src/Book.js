import React from "react";

function book(props) {
  const { name, author, img } = props.book;

  function onClickHandler(name) {
    alert(name);
  }

  console.log(props);
  return (
    <article className="bg-gray-500">
      <img src={img} alt="Book Cover" />
      <h2>Book Name: {name} </h2>
      <h4>Author: {author}</h4>
      <button onClick={() => onClickHandler(name)}>Click Me</button>
    </article>
  );
}

export default book;
