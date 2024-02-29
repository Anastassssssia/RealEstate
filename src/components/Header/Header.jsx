import React from 'react'
import "./Header.css";
import { Link } from "react-router-dom";
import Logo from "../../icon/logo.svg";
import Exit from "../../icon/exit.svg";

export default function Header() {
  return (
    <header>
        <Link to="/" className="logo">
            <img alt="logo" src={Logo} />
            <h1>RealEstate</h1>
        </Link>

        <div className='icon_header'>
          <Link to="login"> <img alt="exit" src={Exit} /></Link>
        </div> 
    </header>
  )
}
