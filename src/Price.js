import React,{useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
function Price() {
    var totalamt=0;
    var avg=0;
    useEffect(() => {
      fetchBooks();
  }, [])
  const [books1,setBooks] = useState([]);
  const fetchBooks = async () => {
      console.log("started");
      const data = await fetch('http://localhost:4000/cart');
      const books = await data.json();
      console.log(books.length);
      setBooks(books)
    }
    for(let i=0;i<books1.length;i++)
    {
      totalamt=totalamt+books1[i].bookPrice;
    }
    console.log(totalamt);
    return (
        <div >
    <div class="card "style={{width:"40%",margin: "20px"}}>
    <div className="card-header py-3">
        <h5 className="mb-0">Billing Details</h5>
      </div>
      <div className="card-body">
        <ul className="list-group list-group-flush">
          <li
            className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
            Products
            <span>{totalamt}</span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center px-0">
            Shipping
            <span>{totalamt/100}</span>
          </li>
          <li
            className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
            <div>
              <strong>Total amount</strong>
              <strong>
                <p class="mb-0">(including VAT)</p>
              </strong>
            </div>
            <span><strong>{totalamt+(totalamt/100)}</strong></span>
          </li>
        </ul>

        <button type="button" class="btn btn-success btn-lg btn-block">
          <Link style={{color:"white"}} to="/myorders">Proceed to pay</Link>
        </button>
      </div>
        </div>
        </div>
    )
}

export default Price
