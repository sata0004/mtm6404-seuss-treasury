import React, { useState, useEffect } from 'react';
import { Route, Routes, Link, useParams } from 'react-router-dom';
import './App.css';

// Component to fetch and display a list of books
const BookListPage = () => {
  const [bookList, setBookList] = useState([]);

  useEffect(() => {
    fetch('https://seussology.info/api/books')
      .then(response => response.json())
      .then(data => setBookList(data))
      .catch(error => console.error('Error fetching books:', error));
  }, []);

  return (
    <div>
      <h1>Books</h1>
      <div className="book-list">
        {bookList.map(book => (
          <div key={book.id} className="book-item">
            <Link to={`/books/${book.id}`}>
              <img src={book.image} alt={book.title} />
            </Link>
            <p>{book.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// Component to fetch and display details of a single book
const BookDetailPage = () => {
  const { id } = useParams();
  const [selectedBook, setSelectedBook] = useState(null);

  useEffect(() => {
    fetch(`https://seussology.info/api/books/${id}`)
      .then(response => response.json())
      .then(data => setSelectedBook(data))
      .catch(error => console.error('Error fetching book details:', error));
  }, [id]);

  if (!selectedBook) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{selectedBook.title}</h1>
      <img src={selectedBook.image} alt={selectedBook.title} />
      <p>{selectedBook.description}</p>
    </div>
  );
};

// Component to fetch and display a list of quotes
const QuoteListPage = () => {
  const [quoteList, setQuoteList] = useState([]);

  useEffect(() => {
    fetch('https://seussology.info/api/quotes/random/10')
      .then(response => response.json())
      .then(data => setQuoteList(data))
      .catch(error => console.error('Error fetching quotes:', error));
  }, []);

  return (
    <div>
      <h1>Quotes</h1>
      <ul style={{ listStyleType: 'number', padding: 0 }}>
        {quoteList.map((quote, index) => (
          <li key={index} style={{textAlign:'left'}}>{quote.text}</li>
        ))}
      </ul>
    </div>
  );
};

// Main App component with routing setup
function App() {
  return (
    <div>
      <nav>
        <Link to="/books">Books</Link> | <Link to="/quotes">Quotes</Link>
      </nav>
      <Routes>
        <Route path="/books" element={<BookListPage />} />
        <Route path="/books/:id" element={<BookDetailPage />} />
        <Route path="/quotes" element={<QuoteListPage />} />
      </Routes>
    </div>
  );
}

export default App;
