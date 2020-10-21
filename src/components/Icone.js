import React from 'react';
import PropTypes from 'prop-types';
import Behance from '../assets/icons/behance.svg';
import Email from '../assets/icons/email.svg';
import Facebook from '../assets/icons/facebook.svg';
import FacebookRedondo from '../assets/icons/facebook_redondo.svg';
import Instagram from '../assets/icons/instagram.svg';
import Telefone from '../assets/icons/telefone.svg';
import Youtube from '../assets/icons/youtube.svg';
import Menu from '../assets/icons/menu.svg';
import Close from '../assets/icons/close.svg';
import { CaretLeftOutlined, CaretRightOutlined, CaretUpOutlined } from '@ant-design/icons';

const Icone = ({ nome, className }) => {
  const icones = {
    behance: <Behance className={className} />,
    email: <Email className={className} />,
    facebook: <Facebook className={className} />,
    facebookRedondo: <FacebookRedondo className={className} />,
    setaDireita: <CaretRightOutlined className={className} />,
    setaEsquerda: <CaretLeftOutlined className={className} />,
    setaTop: <CaretUpOutlined className={className} />,
    instagram: <Instagram className={className} />,
    telefone: <Telefone className={className} />,
    youtube: <Youtube className={className} />,
    menu: <Menu className={className} />,
    close: <Close className={className} />,
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
