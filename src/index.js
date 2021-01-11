import React from "react";
import ReactDom from "react-dom";

import "./index.css";

import { books } from "./books";

import Book from "./Book";

function BookList() {
  return (
    <section>
      {books.map((book) => {
        return <Book book={book} />;
      })}
    </section>
  );
}

ReactDom.render(<BookList />, document.getElementById("root"));
