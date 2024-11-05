import React,{useState,useEffect} from 'react';
import Cart1 from './Cart1';
function Myorders() {
    useEffect(() => {
        fetchBooks();
    }, [])
    const [books1, setBooks] = useState([]);
    const fetchBooks = async () => {
        console.log("started");
        const data = await fetch('http://localhost:4000/cart');
        const books = await data.json();
        console.log(books);
        setBooks(books);
    }
    return (
        <div>
            <div>
            {books1.map(book => <Cart1 key={book.id} book={book} />)}
        </div>
        </div>
    )
}

export default Myorders
