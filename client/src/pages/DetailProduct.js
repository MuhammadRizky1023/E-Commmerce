/** @format */

import React from "react";
import { Layout } from "../component/Layout";
import { useParams} from "react-router"
import { useDispatch, useSelector } from 'react-redux';
import { Cart } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';

export const DetailProduct = () => {
  const dispatch = useDispatch()
   const { id } = useParams()
  const Product = useSelector(state => state.productReducer)

  
  React.useEffect(() => {
    dispatch({ type: "GET_Detail_PRODUCTS",  payload: id })
  }, [dispatch])
  
   const handleAddCart = (e) => {
      e.preventDefault();
    dispatch({type: "CART", payload: id})
  }

  return (
    <Layout>
     <div id="Product">
         {Product.detail ? (
            <div>
      <div id="Rectangle-51">
      <div id="image-72-2">
            <p style={{position:"absolute", left:"92%",  top:"3%", color:"red"}}><sup>{Product.cart.total}</sup></p>
      </div>
      </div>
            
      <pre id="ColorItemTypeName">  {Product.detail.title} </pre>
      <div id="group3"></div>
      <div id="Rectangle4-1"></div>
     <Link id="goback" to="/product-list">GO BACK</Link>
      <p id="Empty"></p>
      <p id="money">  {Product.detail.price} <small style={{ color: 'rgba(195, 222, 228, 1)' }}><del>  {Product.detail.price}</del></small></p>
      <p id="description">
      Lorem Ipsum has been the industry's
         standard dummy text ever since the 1500s, when an unknown printer took a
         galley of type and scrambled it to make a type specimen book.
      </p>
                 

      <div id="MaskGroup">
         <div id="rectangle5"></div>
         <Link to="/cart">
                       <div id="image72-2"></div>
         </Link>
         </div>
                 
      <div id="group4"></div>
      <select id="Select">
         <option value="Small">Small</option>
         <option value="Medium">Medium</option>
         <option value="Big">Big</option>
         <option value="Bigger">Bigger</option>
      </select>
      <p id="Size">Size</p>
                 
      <div id="vector"></div>
               <p id="material">Mens 100% Cotton</p>
               <button id="Rectangle3" onClick={(e) => handleAddCart(e)} class="btn btn-danger"><Cart></Cart></button>
      <div id="rectangle2">
         <div id="rectangle2-1"></div>
         <div id="ImageUrl">
                     <div>
                        <img src={Product.detail.image} style={{
                           position: "absolute", width: "435px",
                           height: "600px", 
                        }} alt="product"/>
                      </div>
         </div>
         <div id="rectanglev"></div>
         <div id="vectorRight"></div>
         <div id="rectanglep">
         </div>     
         <div id="vectorleft"></div>
         <div id="image72">
            <div id="image72-1"></div>
         </div>
         </div>
                 

      <div id="Group2">
         <div id="Rectangle-2">
            <div id="Line1"></div>
            <div id="Group1">
               <div id="Rectangle2-0"></div>
               <div id="Rectangle2-1"></div>
               <div id="Rectangle2-2"></div>
               <div id="Rectangle2-3"></div>
               <div id="Rectangle2-4"></div>
               <div id="Rectangle2-5"></div>
               <div id="Rectangle2-6"></div>
               <div id="Rectangle2-7"></div>
               <div id="Rectangle2-8"></div>
            </div>
            
         </div>
               </div>
             
            </div>
         ) : <>Loading</>}    
   </div>
      </Layout>
  );
};
