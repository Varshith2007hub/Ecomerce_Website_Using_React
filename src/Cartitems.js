import React,{useState,useEffect} from 'react';
import Cart1 from './Cart1';
function Cartitems() {
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
        <div style={{border:"black solid 1px",width:"800px",margin:"10px"}}>
            {books1.map(book => <Cart1 key={book.id} book={book} />)}
        </div>
    )
}

export default Cartitems
