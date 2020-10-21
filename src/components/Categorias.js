import React from 'react';
import { Button } from 'antd';
import styles from '../styles/components/categorias.module.scss';

const Categorias= ({ categorias, comHashtag }) => {
const prepend = comHashtag ? '#' : '';

  return (
    <div className={styles.categorias}>
      {categorias.map(categoria => (
        <Button
          type='link'
          href={categoria.href}
          key={categoria.nome}
        >
          {`${prepend}${categoria.nome}`}
        </Button>
      ))}
    </div>
  );
};

export default Categorias;
