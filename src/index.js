import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router,Switch} from 'react-router-dom';
// import App from './App';
import Myorders from './Myorders';
import Cart from './Cart'
import Books from './Books';
import Navbar from './Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Bookdetails from './Bookdetails';
const routing=(
  <Router>
    <Navbar />
    <Switch>
    <Route path="/" exact component={Books}/>
    <Route path="/myorders"  component={Myorders}/>
    <Route path="/Cart" component={Cart}/>
    <Route path="/bookdetail/:id" component={Bookdetails}/> 
    </Switch>
  </Router>
)
ReactDOM.render(routing,document.getElementById('root')
);

