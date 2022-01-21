import React  from 'react'
import {FiShoppingBag, FiSearch} from'react-icons/fi'
import { AiOutlineDashboard , AiTwotoneEdit,AiOutlineMenu } from 'react-icons/ai'
import {  RiLogoutBoxRFill, RiAdminFill } from 'react-icons/ri'
import { IoBagAddSharp } from 'react-icons/io5'
import User from '../users.jpg';
import '../css/dashboard.css'
import { Link } from 'react-router-dom'
export const Dashboard = () => {
  return (
        <div>
        <div className="sidebar">
        <div className="sidebar-brand">
            <h1><RiAdminFill/>Admin Fashion</h1>
          <div className="sidebar-menu">
            <ul>
                <Link to="/admin/" className="link"><li><FiShoppingBag /><span>Products</span></li></Link>
                <Link to="/admin/new-product" className="link"><li><IoBagAddSharp/><span>NewProducts</span></li></Link>
                <Link to="/admin/edit-product" className="link"><li><AiTwotoneEdit /><span>EditProducts</span></li></Link>
                <Link to="/"className="link" ><li><RiLogoutBoxRFill/><span>Logout</span></li></Link>
            </ul>
            </div>
          </div>
          </div>
          <div className="main-content">
            <header>
          <label for="">
            <span><AiOutlineMenu/></span>
           </label>
              <div className="search-wrapper">
                <span>{FiSearch}</span>
                <input type="search" placeholder="search-here"/>
            </div>
            

              <div className="user-wrapper">
                <img src={User} width="40px" height="40px" alt="" />
                <h>Email</h>
              
              </div>
            </header>
      </div>
            </div>
    )
}
