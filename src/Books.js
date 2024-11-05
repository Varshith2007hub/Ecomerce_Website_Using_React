import React,{useState,useEffect} from 'react';
import Books1 from './Books1';
function Books() {
    useEffect(() => {
        fetchBooks();
    }, [])
    const [books1, setBooks] = useState([]);
    const fetchBooks = async () => {
        console.log("started");
        const data = await fetch('http://localhost:4000/books');
        const books = await data.json();
        console.log(books);
        setBooks(books);
    }
    return (
        <div style={{display:"flex",flexWrap:"wrap"}}>
          {books1.map(book => <Books1 key={book.id} book={book} />)}
        </div>
    )
}

export default Books
