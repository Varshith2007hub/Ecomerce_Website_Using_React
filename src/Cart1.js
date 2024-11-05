import React from 'react'

function Cart1(props) {
    console.log(props)
    return (
        <div style={{width:"90%",height:"50px",border:"green solid 1px",margin:"5px"}}>
            <p><b>{props.book.bookTitle}</b></p>
        </div>
    )
}

export default Cart1
