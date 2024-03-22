/* eslint-disable react/prop-types */
import './NavBarStyle.css'
import logo from '../../assets/Imgs/Logo.svg'
import CartIcon from '../../assets/Imgs/CartIcon.svg'
import { NavLink } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { useState } from 'react';
import { useContext } from 'react'
import { DataContext } from '../../Components/Context/Context'

const NavBar = () => {
  const navigate = useNavigate();
  const [menuIcon, setMenu] = useState(false)
  const MyCartProducts = useContext(DataContext);
  const state = MyCartProducts.state;

  const showMenu = () => {
    setMenu(!menuIcon)
  }

  const NavMenu = [
    {
      title: "Home",
      path: '/'
    },
    {
      title: "Catalogue",
      path: '/Catalogue'
    },
    {
      title: "Contact Us",
      path: '/Contact Us'
    },
    {
      title: "Help",
      path: '/Help'
    },

  ]
  return (
    <nav className='NavBar'>
      <img className='logo' src={logo} alt="SVG as an image" />
      <ul className='NavMenu'>
        {NavMenu.map((element, index) => {
          return (
            <NavLink
              className='NavMenuElement' activeClassName='active' key={index} to={element.path}>{element.title}</NavLink>
          )
        })}
      </ul>
      <div className='RegisterCart'>
        <span className='Cart-Count'>{state.length}</span>
        <img onClick={() => navigate('/MyCart')} className='CartIcon' src={CartIcon} alt="" />
        <button className='RegisterButton'>Register</button>
      </div>

      <div className='IOMenuContaainer'>
        <IoMenu onClick={() => showMenu()} className='IoMenu' />
      </div>

      <div className={menuIcon ? 'ShowSideBar SideBarContainer' : 'SideBarContainer'}>
        <div className='SideBar'>
          <IoMdClose onClick={() => showMenu()} className='IoMdClose' />
          <ul className='NavMenu-SideBar'>
            {NavMenu.map((element, index) => {
              return (
                <NavLink
                  className='NavMenu-SideElement' activeClassName='active' key={index} to={element.path}>{element.title}</NavLink>
              )
            })}
          </ul>
          <div className='RegisterCart-SideBar'>
            <img onClick={() => navigate('/MyCart')} className='CartIcon-SideBar' src={CartIcon} alt="" />
            <button className='RegisterButton-Side'>Register</button>
          </div>
        </div>

      </div>
    </nav>
  )
}

export default NavBar