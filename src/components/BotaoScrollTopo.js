import React, { useState, useEffect } from 'react';
import { Button } from 'antd';
import Icone from './Icone';
import styles from '../styles/components/botaoScrollTopo.module.scss';

const BotaoScrollTopo = () => {
  const [visivel, setVisivel] = useState(false);
  const tamanhoTopo = 400;

  const onScroll = () => {
    if (!visivel && window.pageYOffset > tamanhoTopo){
      setVisivel(true)
    } else if (visivel && window.pageYOffset <= tamanhoTopo){
      setVisivel(false)
    }
  };

  const onClick = () =>{
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    onScroll();
    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  })

  return (
    <Button
      className={styles.scrollTopo}
      onClick={onClick}
      icon={<Icone nome='setaTop' />}
      style={{ height: 40, display: visivel ? 'flex' : 'none' }}
    >
      topo
    </Button>
  );
};

export default BotaoScrollTopo;
