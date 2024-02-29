import React, {useState} from 'react'
import { Link } from "react-router-dom";

import "./Navbar.css";
// --------
import Menu from "../../icon/menu.svg";
import Bio from "../../icon/bio.svg";
import House from "../../icon/house.svg";
import Requests from "../../icon/requests.svg";
import Clients from "../../icon/сlients.svg";
import Contracts_O from "../../icon/contracts_owner.svg";
import Owners from "../../icon/owners.svg";
import Contracts from "../../icon/contracts.svg";
import Employees from "../../icon/employees.svg";

export default function Navbar() {
  
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <>
        <div className={clicked ? 'sidebar active_sidebar' : 'sidebar inactive_sidebar'}>
            <div className={clicked ? 'active_i_menu' : 'inactive_i_menu'}>
                <img alt='menu' src={Menu} className='icon_menu' onClick={handleClick}/>
            </div>

            <div className={clicked ? 'bio active_bio' : 'bio inactive_bio'}>
                <div className={clicked ? 'icon_bio' : 'inactive_i_bio'}>
                  <img alt='bio_photo' src={Bio} />
                </div>
                <div className={clicked ? 'bio_text' : 'inactive_bio_text'}>
                  <span>Волошина Мішель</span>
                  <span>michel88@gmail.com</span>
                </div>
            </div>

            <nav>
                <ul className={clicked ? "navbar active_nav" : "navbar inactive_nav"}>
                  <li>
                    <Link className='nav-links' to="/">
                      <img alt='house' src={House}/>
                      <span>Нерухомість</span>
                    </Link>
                  </li>
                  <li>
                    <Link className='nav-links' to="/requests">
                      <img alt='requests' src={Requests}/>
                      <span>Заявки</span>
                    </Link>
                  </li>
                  <li>
                    <Link className='nav-links' to="/contracts_owners">
                      <img alt='contracts_o' src={Contracts_O}/>
                      <span>Договори з власниками</span>
                    </Link>
                  </li>
                  <li>
                    <Link className='nav-links' to="/contracts">
                      <img alt='contracts' src={Contracts}/>
                      <span>Договори</span>
                    </Link>
                  </li>
                  <li>
                    <Link className='nav-links' to="/clients">
                      <img alt='clients' src={Clients}/>
                      <span>Клієнти</span>
                    </Link>
                  </li>
                  <li>
                    <Link className='nav-links' to="/owners">
                      <img alt='owners' src={Owners}/>
                      <span>Власники</span>
                    </Link>
                  </li>
                  <li>
                    <Link className='nav-links' to="/employees">
                      <img alt='employees' src={Employees}/>
                      <span>Співробітники</span>
                    </Link>
                  </li>

                </ul>
            </nav>
        </div>

    </>
  )
}
