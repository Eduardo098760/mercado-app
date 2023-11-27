import React, { useContext } from "react";
import propTypes from "prop-types";
import { BsCartDashFill } from "react-icons/bs";

import formartCurrency from "../../utils/formatCurrency";
import "./CartItem.css";
import AppContext from "../../context/AppContext";

function CartItem ({ data }) {

  const { cartItems, setCartItems } = useContext(AppContext);
  const { id, thumbnail, title, price } = data;

  const handleRemovieItem = () => {
    const updatedItems =  cartItems.filter((item) => item.id != id);
    setCartItems(updatedItems);
    window.alert(" Removido com sucesso!");
  };

  return(
    <section className="cart-item">
      <img 
        src={thumbnail}
        alt="imagem do produto" 
        className="img-cart-product" 
      />

      <div className="cart-item-content">
        <h3 className="cart-item-title">{title}</h3>
        <h3 className="cart-item-price">{formartCurrency(price, "BRL")}</h3>
        <button 
          type="button" 
          className="button-remove-item"
          onClick={ handleRemovieItem }
        >
          <BsCartDashFill />
        </button>
      </div>
    </section>
  );
}

export default CartItem;

CartItem.propTypes ={
  data: propTypes.object
}.isRequired;