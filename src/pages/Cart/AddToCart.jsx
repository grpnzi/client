import IsPrivate from '../../components/IsPrivate/IsPrivate';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cart from "../../components/CartDetails/Cart";


function AddToCart(){

return(
    <div>
        <IsPrivate>
            <Cart />
        </IsPrivate>
    </div>
)

}

export default AddToCart