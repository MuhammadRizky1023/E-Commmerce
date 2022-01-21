import React from "react"
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import '../App.css';
import { Layout } from "../component/Layout";


export default function Cart() {

  const Products = useSelector(state => state.productReducer)
  console.log(Products, "Ini Product di keranjang")
  const Back = {
    border: "none",
    color: "white",
    padding: "15px 32px",
    textalign: "center",
    fontsize: "16px",
    margin: "4px 2px",
    cursor: "pointer",
    backgroundColor: "silver",
    position: "absolute;",
    right: 27,
    top: "70%",
  }
  const Checkout = {
    border: "none",
    color: "white",
    padding: "15px 32px",
    textalign: "center",
    textdecoration: "none",
    display: "inline-block",
    fontsize: "16px",
    margin: "4px 2px",
    cursor: "pointer",
    backgroundColor: "red",
    right: 30,
    top: "100px"
  }
  


  return (
    <React.Fragment>
     <Layout>
      <div style={{
                                       margin: "3rem",
                                      // background: item.category === "all" ? " blue" : "red",
                                       width:"1000px",
                                       height:"700px",
                                       color: "#FFFFF"
                                    }}>
        {Products.cartItem.map((item) => {
          return(
          <div>
          <div class="card" >
	<div class="row">
		<div class="col-md-4">
                    <img src="gambar4.jpg" class="card-img" alt="..." src={ item.image}/>
		</div>
		<div class="col-md-8">
			<div class="card-body">
                      <h5 class="card-title">{ item.title}</h5>
                      <p class="card-text">{item.price}</p>
                      <p class="card-text"><small class="text-muted">Total: {Products.cart.total}</small></p>
                      <Link to='/products'><button  style={Back}>Kembali</button></Link>
            <Link to="/checkout"><button style={Checkout}>Checkout</button></Link>
			</div>
		</div>
	</div>
</div>
</div>
          )


        })}
        {/* {Products.cartItem ? (
         
         
          
        ) : <>Loading</>}   
     */}
      </div>
      </Layout>
    </React.Fragment>
  )
   }
