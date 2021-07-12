import React, { useState } from "react";
import { Link } from 'react-router-dom';
import arrow from '../assets/arrow.svg';
import MenuItem from '../components/MenuItem'

export interface MenuState {
  menu: {
    title: string
    path: string
  }
}

const Menu = () => {
  //mockup menus
  const menus = [
    {
      title: 'Menu1',
      path: '/menu1'
    },
    {
      title: 'Menu2',
      path: '/menu2'
    },
    {
      title: 'Menu2',
      path: '/menu3'
    }
  ]

  const [menuList] = useState<MenuState['menu'][]>(menus)

  return (
    <div className="container">
      <div className="header">
        <div className="hamburger-container">
          <Link to="/">
            <img data-testid="backBtn" className="hamburger" src={arrow} alt="arrow-icon" />
          </Link>         
        </div>
        <div className="title-container">
          <h3 data-testid="pageTitle" className="tc">Menu</h3>
        </div>
      </div>

      <div className="content-container">
        <ul>
          {
            menuList.map((menu, key) => {
              return <MenuItem key={key} menu={menu} />
            })
          }
        </ul>
      </div>
    </div>
  )
}

export default Menu