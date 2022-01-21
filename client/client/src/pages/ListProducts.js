/** @format */

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Layout } from "../component/Layout";
import { Cart } from "react-bootstrap-icons";
import axios from "axios";

export const ListProducts = () => {
  const dispatch = useDispatch()
   const productState = useSelector((state) => state.productReducer);
  
  const changeCategory = (value) => {
    dispatch({ type: "CHANGE_ACTIVE_CATEGORY", payload: value });
    dispatch({ type: "SET_SHOW_PRODUCTS", payload: value });
  }


  const hanndleSeacrh = (event) => {
    event.preventDefault()
    const findProduct = productState.product.find(
      item => item.title.toLowerCase() === event.target.value.toLowerCase()
    );

    if (findProduct) {
      dispatch({
        type: "CHANGE_ACTIVE_CATEGORY",
        payload: findProduct.category
      });
      dispatch({
        type: "HANDLE_SEARCH",
        payload: { category: findProduct.category, title: findProduct.category }
      });
    } else {
      dispatch({ type: "SHOWING_PRODUCTS", payload: "all" });
    }
  };

  const changeFilter = (value) => {
    dispatch({ type: "FILTER_PRODUCTS", payload: value });
  }

  React.useEffect((value) => {
    dispatch({ type: "SET_SHOW_PRODUCTS", payload: value});
    dispatch({ type: "CHANGE_ACTIVE_CATEGORY", payload: value });
  }, [dispatch])

  const handleAddCart = (e, id) => {
    e.preventDefault();
    dispatch({ type: "CART", payload: id });
  };

  
  

  return (
    <Layout>
      <div id="Shop">
        <div id="shopName">The Fashion</div>
        <div id="Rectangle-51">
        <Link to="/cart">
          <div id="image-72-2"></div>
          <p
            style={{
              position: "absolute",
              left: "93%",
              top: "3%",
              color: "red"
            }}
          >
            <sup>{productState.cart.total}</sup>
          </p>
          </Link>
        </div>

        <div id="Group-4">
          <div id="Line-1"></div>
          <input placeholder="search-product" id="Products" onClick={(e) => hanndleSeacrh(e)} />
          <div id="image-search">
            <div id="image72-2"></div>
          </div>
        </div>

        <div
          style={{ padding: "8%", display:"flex", justifyContent: "space-between", alignItems:"center", top: "45px"}}>
          <div>
            <div style={{ fontSize: "22px", fontWeight: "bolder" }}> Category </div>
            {productState.categories.map((item) => {
              return (
                <div
                key={item.key}
                  style={{
                    cursor: "pointer",
                    margin: "2rem 0",
                    fontSize: "18px",
                    
                  }}
                  onClick={() => changeCategory(item.key)}
                >
                  {item.title}
                </div>
              )
            })}
          </div>
          <div className="d-flex justify-content-center align-items-center flex-wrap">
            {productState.productShow.map((item, index) => {
              return (
                <Link>
                <div key={index}
                  style={{ margin: "2rem", color: "black" }}
                >
                    <div>
                    <Link key={index} to={`/products-detail/${item.id}`}>
                    <img src={item.image} style={{width: "155px"}}/>
                    </Link>
                  </div>
                  <div style={{ textAlign: "center", fontSize:"15px" }}> {item.title}</div>
                    <div style={{ textAlign: "center", fontSize: "15px" }} >{item.price}</div>
                    <div className="d-flex justify-content-center align-items-center flex-wrap" >
                      <Link to="/add:id">
                            <button
                              type="button"
                              onClick={(e) => handleAddCart(e, item.id)}
                          class="btn btn-danger"
                            >
                              <Cart></Cart>Keranjang
                            </button>
                          </Link></div>
                </div>
                </Link>
              )
            })}
          </div>
          <div>
          <div style={{ fontSize: "22px", fontWeight: "bolder" }}> Filter </div>
            {productState.filter.map((item) => {
              return (
                <div
                key={item.key}
                  style={{
                    cursor: "pointer",
                    margin: "2rem 0",
                    fontSize: "22px",
                    
                  }}
                  onClick={() => changeFilter(item.key)}
                >
                  {item.title}
                </div>
              )
            })}
          </div>
        </div>
        

        <div id="LineNumber"></div>
        <p id="number">123456789</p>
        <div id="rectangle-2b">
          <div id="LineA"></div>
        </div>
        <div id="groupnonagen">
          <div id="nonagenA" />
          <div id="nonagenB" />
          <div id="nonagenC" />
          <div id="nonagenD" />
          <div id="nonagenE" />
          <div id="nonagenF" />
          <div id="nonagenG" />
          <div id="nonagenH" />
          <div id="nonagenI" />
          <div id="nonagenJ" />
        </div>
      </div>
    </Layout>
  );
};
