import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/components/tituloContato.module.scss'

const TituloContato = ({ tema }) => {
  const temas = {
    default: styles.container,
    alternativo: styles.containerAlternativo
  };

  return (
    <div className={temas[tema]}>
      <h1>Fale</h1>
      <h2>Conosco</h2>
    </div>
  );
};

TituloContato.propTypes = {
  tema: PropTypes.oneOf(['default', 'alternativo']),
};

TituloContato.defaultProps = {
  tema: 'default',
};

export default TituloContato;
