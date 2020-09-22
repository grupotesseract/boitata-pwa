import React, { useState } from "react"
import logoBoitataEscrito from "../assets/boitata_escrito.png"
import { Link } from "gatsby"
import SocialMedia from "./SocialMedia";
import menuStyles from '../styles/components/menu.module.scss'

const MenuItemHoverAnimado = ({ children }) => (
  <div className={menuStyles.menuItemHoverAnimado}>
    <span>{children}</span>
    <span className={menuStyles.active}>{children}</span>
  </div>
)

const Menu = () => {
  const [menuAberto, setMenuAberto] = useState(false);
  return (
    <div className={menuStyles.container}>
      {!menuAberto && (
        <div className={menuStyles.mobileMenu}>
          <Link to="/">
            <img
              src={logoBoitataEscrito}
              alt="Boitatá"
              className={menuStyles.imgLogo}
            />
          </Link>
          <button
            onClick={() => setMenuAberto(true)}
            className={menuStyles.mobileOpenButton}
          >
            Menu
          </button>
        </div>
      )}
      <ul className={menuAberto ? menuStyles.menuAberto : menuStyles.menu}>
        {menuAberto && (
          <button
            onClick={() => setMenuAberto(false)}
            className={menuStyles.closeButton}
          >
            X
          </button>
        )}
        <li className={menuStyles.itemlogo}>
          <Link to="/">
            <img
              src={logoBoitataEscrito}
              alt="Boitatá"
              className={menuStyles.imgLogo}
            />
          </Link>
        </li>
        <li>
          <Link to="/quemsomos">
            <MenuItemHoverAnimado>Quem Somos</MenuItemHoverAnimado>
          </Link>
        </li>
        <li>
          <Link to="/portfolio">
            <MenuItemHoverAnimado>Portfólio</MenuItemHoverAnimado>
          </Link>
        </li>
        <li>
          <Link to="/blog">
            <MenuItemHoverAnimado>Blog</MenuItemHoverAnimado>
          </Link>
        </li>
        <li>
          <Link to="/contato">
            <MenuItemHoverAnimado>Contato</MenuItemHoverAnimado>
          </Link>
        </li>
        <SocialMedia className={menuStyles.socialMedia} />
      </ul>
    </div>
  )
}

export default Menu;
