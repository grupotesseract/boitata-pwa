import React, { useState } from "react"
import logoBoitataEscrito from "../assets/boitata_escrito.png"
import { Link } from "gatsby"
import SocialMedia from "./SocialMedia";
import menuStyles from '../styles/components/menu.module.scss'

const Menu = () => {
  const [menuAberto, setMenuAberto] = useState(false);
  return (
    <div className={menuStyles.container}>
      {!menuAberto && (
        <div className={menuStyles.mobileMenu}>
          <Link to="/">
            <img src={logoBoitataEscrito} alt="Boitatá" className={menuStyles.imgLogo}/>
          </Link>
          <div
            onClick={() => setMenuAberto(true)}
            className={menuStyles.mobileOpenButton}
          >
            Menu
          </div>
        </div>
      )}
      <ul className={menuAberto ? menuStyles.menuAberto : menuStyles.menu}>
        {menuAberto && (
          <div
            onClick={() => setMenuAberto(false)}
            className={menuStyles.closeButton}
          >
            X
          </div>
        )}
        <li className={menuStyles.itemlogo}>
          <Link to="/">
            <img src={logoBoitataEscrito} alt="Boitatá" className={menuStyles.imgLogo}/>
          </Link>
        </li>
        <li>
          <Link to="/quemsomos">Quem Somos</Link>
        </li>
        <li>
          <Link to="/portfolio">Portfólio</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/contato">Contato</Link>
        </li>
        <SocialMedia className={menuStyles.socialMedia} />
      </ul>
    </div>
  )
}

export default Menu;
