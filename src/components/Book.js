// components/Book.js
import React from 'react';

function Book({ book, deleteBook }) {
  return (
    <div className="book">
      {/* TODO: Add img element to display the book cover */}
      <img src={book.image} alt={`${book.title} cover`} />
      
      {/* TODO: Display the book title */}
      <h3>{/* TODO: Insert book title here */}</h3>
      
      {/* TODO: Display the book author */}
      <p>Author: {/* TODO: Insert author name here */}</p>
      
      {/* TODO: Display the book genre */}
      <p>Genre: {/* TODO: Insert genre here */}</p>
      
      {/* TODO: Implement delete button functionality */}
      <button onClick={() => {/* TODO: Call deleteBook function here */}}>Delete</button>
    </div>
  );
}

export default Book;

