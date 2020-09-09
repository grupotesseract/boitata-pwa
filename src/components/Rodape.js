import React from 'react'
import Logo from '../components/Logo';
import TituloRodape from '../components/TituloRodape';
import rodapeStyles from '../styles/components/rodape.module.scss';

const Rodape = () => (
  <div className={rodapeStyles.container}>
    <div className={rodapeStyles.conteudo}>
      <Logo />
      <TituloRodape />
    </div>
  </div>
);

export default Rodape;
