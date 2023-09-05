import { createContext, useState } from "react";

const CartContext = createContext();

// CREATE A WRAPPER COMPONENT
function CartProviderWrapper(props) {
  const [cart, setCart] = useState([]);

  const cartUpdate = (experience) => {
    const newCart = [...cart, experience] // ...cart crea una nueva lista en torno a la existente
    console.log(newCart);
    setCart(newCart)
  }

  const resetCart = () => {
    setCart([])
  }

  const deleteOne = (object) => {
    const newCart = cart.filter((experience) => {
      return experience._id !== object._id
    })

    setCart(newCart)
  }


  return (
    /* SET UP THE PROVIDER */
    <CartContext.Provider value={{ cart, cartUpdate, resetCart, deleteOne }}>
      {props.children}
    </CartContext.Provider>
  );
}

export { CartContext, CartProviderWrapper };   // <== UPDATE