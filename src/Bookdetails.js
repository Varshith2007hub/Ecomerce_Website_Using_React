import React,{useState,useEffect} from 'react';
import { Link } from "react-router-dom";
import axios from "axios";
function Bookdetails({match}) {
    function check(){
        console.log("in check");
        componentDidMount();
    }
    function componentDidMount() {
        // Simple POST request with a JSON body using axios
        const Book = books1;
        console.log(books1)
        axios.post('http://localhost:4000/cart',Book)
        .then(res => console.log(res));
    }
    // console.log(match)
    const id=match.params.id;
    // console.log(id);
    useEffect(() => {
        fetchBooks();
    }, [])
    const [books1, setBooks] = useState([]);
    const fetchBooks = async () => {
        // console.log("started");
        const data = await fetch(`http://localhost:4000/books/${id}`);
        const books = await data.json();
        console.log(books);
        setBooks(books);
    }
    return (
        <div>
            <h1 style={{margin:"20px"}}>{books1.bookTitle}</h1>
            <div style={{display:"flex"}}>
                <div style={{height:"250px",width:"200px",margin:"10px"}}>
                <img className="card-img-top" src="https://th.bing.com/th/id/OIP.0JmYG5E90CH44HqiMM05iwHaLH?pid=ImgDet&rs=1"  style={{height:"100%"}}alt="Card image cap"/>
                </div>
                <div style={{height:"250px",width:"210px",margin:"20px"}}>
                    <p><b>Book Id: </b>{books1.id}</p>
                    <p><b>BookPrice: </b>{books1.bookPrice}</p>
                    <p><b>BookAuthor: </b>{books1.author}</p>
                    <p><b>Pages: </b>{books1.pageCount}</p>
                    <p><b>ISBN no: </b>{books1.ISBN}</p>
                  <button className="bg-success"  onClick={check} style={{margin:"10px"}}><Link  to="/cart">Buynow</Link></button>
                    <button   onClick={check} className="bg-success">Adtocart</button>
                </div>
            </div>
            <h1 style={{margin:"10px"}}>Description</h1>
            <div style={{border:"solid black 1px",width:"1000px",height:"300px",margin:"10px"}}>

            </div>
        </div>
    )
}

export default Bookdetails
