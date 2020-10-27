import React from 'react';
import styles from '../styles/components/categorias.module.scss';
import { Link } from 'gatsby';

const Categorias= ({ categorias, comHashtag }) => {
const prepend = comHashtag ? '#' : '';

  return (
    <div className={styles.categorias}>
      {categorias.map(categoria => (
        <Link
          key={categoria}
          to='/portfolio'
          state={{ categoriaAtual: categoria }}
        >
          {`${prepend}${categoria}`}
        </Link>
      ))}
    </div>
  );
};

export default Categorias;
