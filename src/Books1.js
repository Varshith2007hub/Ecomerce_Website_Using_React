import React from 'react'
import { Link } from 'react-router-dom';
import axios from "axios";
function Books1(props) {
// console.log(props);
 function check(){
     console.log("in check");
     varsith();
 }
 function varsith() {
    // Simple POST request with a JSON body using axios
    const Book = props.book;
    console.log(props.book)
    axios.post('http://localhost:4000/cart',Book)
    .then(res => console.log(res));
}
    return (
            <div className="card" style={{width:"15rem",margin:"15px"}}>
                <img className="card-img-top" src="https://th.bing.com/th/id/OIP.0JmYG5E90CH44HqiMM05iwHaLH?pid=ImgDet&rs=1"  style={{height:"200px"}}alt="Card image cap"/>
                <div className="card-title">
                    <p><Link to={`/bookdetail/${props.book.id}`}><p style={{}}>{props.book.bookTitle}</p></Link></p>
                </div>
                <div className="card-body">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
                <button onClick={check}><Link  to="/cart">Buynow</Link></button>
               
                </div>
        /* </div>
           <Link to={`/bookdetail/${props.book.id}`}>
           <h1 style={{}}>{props.book.bookTitle}</h1>
           </Link>
        </div> */
    )
}

export default Books1
