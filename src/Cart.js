import { Component } from "react";
import Address from "./Address";
import Cartitems from "./Cartitems";
import Price from "./Price";
class Cart extends Component{
    render(){
        return(
            <div>
            <div style={{display:"flex",flexWrap:"wrap"}}>
               <Address />
               <Cartitems />
            </div>
            <Price />
            </div>
        )
    }
}
export default Cart