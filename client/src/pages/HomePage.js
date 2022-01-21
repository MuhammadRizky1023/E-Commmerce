import React from 'react'
import '../App.css';
import { Link } from 'react-router-dom';
import '../App.css'
import { Layout } from '../component/Layout';
export default function HomePage(){
   return (
      <Layout>
   <div id="MainPage">
      <div id="Blur">
         <p id="Choose">Choose <b>as you want </b>Pay <b>as you can</b></p><Link to="/products">
      <div id="ButtomShop">
      </div>
        <p id="shopText">Shop Now</p></Link>
      </div>
      <p id="NewConcept"><strong>New Concept</strong>  of Online Shopping</p>
      <p id="lorem">Lorem Ipsum will go here. Lorem Ipsum will go here. Lorem Ipsum will go here. Lorem Ipsum will go here.</p>
      <p id="Latest">LATEST</p>
      <div id="Line---"></div>
      <p id="All">All</p>
      <div id="Line-100"></div>
      <div id="GalleryBox"></div>
      <p id="Gallery">Gallery</p>
      <p id="subTitle">subTitle</p>
      <div id="ActivityBox"></div>
      <p id="Activity">Activities</p>
      <p id="subTitle1">subTitle</p>
      <div id="KeynotesBox"></div>
      <p id="Keynotes">Keynotes</p>
      <p id="subTitle2">subTitle</p>
      <div id="Line-"></div>
            
      <div id="nonagon">
         <div id="nonagon1"></div>
      <div id="nonagon1"></div>
      <div id="nonagon2"></div>
      <div id="nonagon3"></div>
      <div id="nonagon4"></div>
      <div id="nonagon5"></div>
      <div id="nonagon6"></div>
      <div id="nonagon7"></div>
      <div id="nonagon8"></div>
      <div id="nonagon9"></div>
   </div>
   </div>
         </Layout>
   )
}