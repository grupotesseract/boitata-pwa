import React from 'react';
import PropTypes from 'prop-types';
import Behance from '../assets/icons/behance.svg';
import Email from '../assets/icons/email.svg';
import Facebook from '../assets/icons/facebook.svg';
import FacebookRedondo from '../assets/icons/facebook_redondo.svg';
import Instagram from '../assets/icons/instagram.svg';
import Telefone from '../assets/icons/telefone.svg';
import Youtube from '../assets/icons/youtube.svg';

const Icone = ({ nome, className }) => {
  const icones = {
    behance: <Behance className={className} />,
    email: <Email className={className} />,
    facebook: <Facebook className={className} />,
    facebookRedondo: <FacebookRedondo className={className} />,
    instagram: <Instagram className={className} />,
    telefone: <Telefone className={className} />,
    youtube: <Youtube className={className} />,
  };

  return icones[nome];
};

Icone.defaultProps = {
  className: '',
};

Icone.propTypes = {
  nome: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Icone;
