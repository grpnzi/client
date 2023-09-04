import { useState, useEffect } from "react";
import { useParams, Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Cart from "../../components/CartDetails/Cart";


function AddToCart(){

return(
    <div>
    <Cart />
    </div>
)

}

export default AddToCart