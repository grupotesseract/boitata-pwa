import React from 'react'
import Logo from '../components/Logo';
import SocialMedia from '../components/SocialMedia';
import TituloRodape from '../components/TituloRodape';
import rodapeContatoStyles from '../styles/components/rodapeContato.module.scss';

const RodapeContato = () => (
  <div className={rodapeContatoStyles.container}>
    <div className={rodapeContatoStyles.containerBackground} />
    <div className={rodapeContatoStyles.conteudo}>
      <Logo />
      <div>
        <a href={'mailto:contato@coletivoboitata.com.br'} target='_blank' rel='noopener noreferrer' className='email'>
          <p>contato@coletivoboitata.com.br</p>
        </a>
        <SocialMedia />
      </div>
      <TituloRodape />
    </div>
  </div>
);

export default RodapeContato;
