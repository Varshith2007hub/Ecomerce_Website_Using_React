import { Component } from "react";
import { Link } from "react-router-dom";
class Navbar extends Component{
    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <p className="navbar-brand">OnlineBookStore</p>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div  id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <Link to="/">
                  <p className="nav-item nav-link">Home</p>
                </Link>
                <Link to="/cart">
                <p className="nav-item nav-link">Cart</p>
                </Link>
                <Link to="/myorders">
                  <p className="nav-item nav-link">myorders</p>
                </Link>
              </div>
            </div>
          </nav>
        );
    }
}

export default Navbar;