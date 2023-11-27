import React, { useContext } from "react";
import { BsFillCartPlusFill } from "react-icons/bs";
import propTypes from "prop-types";

import "./ProductCard.css";
import formartCurrency from "../../utils/formatCurrency";
import AppContext from "../../context/AppContext";

function ProductCard({ data }) {
  const { title, price, thumbnail } = data;

  const {cartItems, setCartItems} = useContext(AppContext);

  const handleAddCart = () => setCartItems([ ... cartItems, data ]);

  return (
    <section 
      className="products-card">
      <img src={thumbnail.replace(/\w\.jpg/gi, "W.jpg")} 
        className="card-image"
        alt="product" />
      <div className="card-infos">
        <h2 className="card-price">{formartCurrency(price, "BRL")}</h2>
        <h2 className="card-title">{title}</h2>
      </div>
      <button 
        type="button"
        className="button-add-cart"
        onClick={ handleAddCart }
      >
        <BsFillCartPlusFill />
      </button>
    </section>
  );
}

export default ProductCard;

ProductCard.propTypes = {
  data: propTypes.shape({}),
}.isRequired;