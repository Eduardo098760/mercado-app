import React, { useState, useContext } from "react";
import { BsSearch } from "react-icons/bs";

import "./SearchBar.css";
import fetchProducts from "../../../api/fetchProducts";
import AppContext from "../../../context/AppContext";


function SearchBar() {

  const {setProducts, setLoading} = useContext(AppContext);
  const [searchValue, setSearchValue] = useState("");

  const heandleSearch = async (event) => {
    event.preventDefault();
    setLoading(true);
    const products = await fetchProducts(searchValue);
    setSearchValue("");
    setProducts(products);
    setLoading(false);
  };
  return (
    <form className="search-bar" onSubmit={heandleSearch}>
      <input
        type="search"
        value={searchValue}
        placeholder="Buscar produtos"
        className="search__input"
        required
        onChange={({target}) => setSearchValue (target.value)}
      />
      <button type="submit" className="search__buttom">
        <BsSearch />
      </button>
    </form>
  );
}

export default SearchBar;