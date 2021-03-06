import React from 'react';
import PropTypes from 'prop-types';
import Rodape from './Rodape';
import '../styles/index.scss';
import layoutStyles from '../styles/components/layout.module.scss'
import Menu from './Menu';

const Layout = ({ children, rodape }) => (
  <div className={layoutStyles.container}>
      <Menu />
    <div className={layoutStyles.conteudo}>
      {children}
    </div>
    {rodape}
  </div>
);

Layout.defaultProps = {
  rodape: <Rodape />,
};

Layout.propTypes = {
  children: PropTypes.node,
  rodape: PropTypes.node,
};

export default Layout;
