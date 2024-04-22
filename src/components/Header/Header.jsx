
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import corzina from "../../assets/svg/corzina.svg";
import heart from "../../assets/svg/heart.svg";
import Man from "../../assets/svg/user.svg";
import Search from "../../assets/svg/Vector.svg";
import BaiNur from '../../assets/svg/Logo.svg'
import './Header.css'
// import './HeaderAdapp.css'
// import Container from "react-bootstrap";
// import  Navbar  from "react-bootstrap";
function Header() {

    const [scrolling, setScrolling] = useState(false)
    const [lastScrollTop, setLastScrollTop] = useState(0)

    // useEffect(()=>{
    //     const handleScroll = () =>{
    //         const currentScrollTop = window.pageYOffset;
    //         if (currentScrollTop < lastScrollTop){
    //             setScrolling(true)
    //         }else{
    
    //             setScrolling(false)
    //         }
    //         setLastScrollTop(lastScrollTop)
    //     }      
    //     window.addEventListener("scroll", handleScroll)
    //     return ()=>{
    //         window.removeEventListener("scroll", handleScroll)
    //     }                                                                               
    // }, [lastScrollTop])


  return (
    <>
      <header >
        <div className="container header-content">

        
      
          <div className="logo">

            <img src={BaiNur} alt="" />

          </div>
          <nav>
            <ul>
              <li>
                <Link to="/">Главная</Link>
              </li>
              <li>
                <Link to="/about">О нас</Link>
              </li>
          
              <li>
                <Link to="/formen">Для Мужчин</Link>
              </li>
              <li>
                <Link to="/women">Для Женщин</Link>
              </li>
              <li>
                <Link to="/children">Для Детей</Link>
              </li>
            </ul>
            <div className="image-info-header">
              <Link to="/Registration">
                <img className="man" src={Man} alt="" />

              </Link>
              <select className="select" name="" id="">
                <option className="option" value="">
                  Ru
                </option>
              </select>
              <Link className="cart" to="/basket">
        
                <img className="corzina" src={corzina} alt="" />
              </Link>
              <img className="search" src={Search} alt="" />
              <Link to="/izbran">
              <img className="heart" src={heart} alt="" />
              </Link>
            </div>

          </nav>

          </div>

   
      </header>
    </>
  );
}

export default Header;
