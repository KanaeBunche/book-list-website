// components/BookList.js
import React from 'react';
import Book from './Book';

function BookList({ books, deleteBook }) {
  return (
    <div className="book-list">
      {/* TODO: Map through the books array and render Book components */}
      {books.map(book => (
        <Book 
          key={book.id} 
          book={book} 
          deleteBook={deleteBook} 
        />
      ))}
      {/* TODO: Handle the case when there are no books */}
    </div>
  );
}

export default BookList;
