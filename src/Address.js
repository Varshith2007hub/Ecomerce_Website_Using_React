import React,{useState,useEffect} from 'react';
function Address() {
    useEffect(() => {
        fetchBooks();
    }, [])
    const [books1, setBooks] = useState([]);
    const fetchBooks = async () => {
        console.log("started");
        const data = await fetch('http://localhost:4000/contactinfo');
        const books = await data.json();
        console.log(books);
        setBooks(books);
    }
    return (

        <div style={{border:"solid black 1px",width:"400px",margin:"10px"}}>
            <h1>Address</h1>
            <p><b>Name:</b> {books1.name}</p>
            <p><b>PhoneNumber:</b> {books1.Phonenumber}</p>
            <p><b>Pincode:</b> {books1.pincode}</p>
            <p><b>Shipment Address:</b> {books1.ship}</p>
        </div>
    )
}

export default Address
