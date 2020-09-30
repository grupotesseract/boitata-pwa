import React, { useState } from "react"
import logoBoitataEscrito from "../assets/boitata_escrito.png"
import { Link } from "gatsby"
import SocialMedia from "./SocialMedia";
import menuStyles from '../styles/components/menu.module.scss'
import Fade from '../components/animacoes/Fade';
import Icone from "./Icone";
import { useScrollPosition } from '@n8tb1t/use-scroll-position'

const MenuItemHoverAnimado = ({ children, cor = "#72c4e1", getProps }) => {
  if (getProps?.isCurrent) {
    return <span style={{ color: cor }}>{children}</span>
  }
  return (
    <div className={menuStyles.menuItemHoverAnimado}>
      <span>{children}</span>
      <span className={menuStyles.active} style={{ color: cor }}>
        {children}
      </span>
    </div>
  )
}

const Menu = () => {
  const [menuAberto, setMenuAberto] = useState(false);
  const [menuTranslucido, setMenuTranslucido] = useState(false)

  useScrollPosition(
    ({ prevPos, currPos }) => {
      const scrollDown = currPos.y < prevPos.y
      if (scrollDown !== menuTranslucido) setMenuTranslucido(scrollDown)
    },
    [menuTranslucido]
  )

  return (
    <div
      className={[
        menuStyles.container,
        menuTranslucido ? menuStyles.menuTranslucido : {},
      ].join(" ")}
    >
      {!menuAberto && (
        <div className={menuStyles.mobileMenu}>
          <Link to="/">
            <Fade>
              <img
                src={logoBoitataEscrito}
                alt="Boitatá"
                className={menuStyles.imgLogo}
              />
            </Fade>
          </Link>
          <button
            onClick={() => setMenuAberto(true)}
            className={menuStyles.mobileOpenButton}
          >
            <Icone nome="menu" />
          </button>
        </div>
      )}
      <ul className={menuAberto ? menuStyles.menuAberto : menuStyles.menu}>
        {menuAberto && (
          <button
            onClick={() => setMenuAberto(false)}
            className={menuStyles.closeButton}
          >
            <Icone nome="close" />
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
          <Link to="/quemsomos" activeClassName={menuStyles.linkAtivo}>
            <MenuItemHoverAnimado>Quem Somos</MenuItemHoverAnimado>
          </Link>
        </li>
        <li>
          <Link to="/portfolio" activeClassName={menuStyles.linkAtivo}>
            <MenuItemHoverAnimado cor="#dd9a00">Portfólio</MenuItemHoverAnimado>
          </Link>
        </li>
        <li>
          <Link to="/blog" activeClassName={menuStyles.linkAtivo}>
            <MenuItemHoverAnimado>Blog</MenuItemHoverAnimado>
          </Link>
        </li>
        <li>
          <Link to="/contato" activeClassName={menuStyles.linkAtivo}>
            <MenuItemHoverAnimado cor="#dd9a00">Contato</MenuItemHoverAnimado>
          </Link>
        </li>
        <SocialMedia className={menuStyles.socialMedia} />
      </ul>
    </div>
  )
}

export default Menu;
