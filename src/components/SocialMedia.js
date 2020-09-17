import React from 'react'
import PropTypes from 'prop-types';
import Icone from './Icone';
import socialMediaStyles from '../styles/components/socialMedia.module.scss'

const SocialMedia = ({ className }) => (
  <div className={className}>
    <a href='https://www.instagram.com/coletivoboitata/' target='_blank' rel='noreferrer noopener'>
      <Icone nome='instagram' className={socialMediaStyles.icone} />
    </a>

    <a href='https://www.facebook.com/coletivoboitata' target='_blank' rel='noreferrer noopener'>
      <Icone nome='facebook' className={socialMediaStyles.icone} />
    </a>

    <a href='https://www.behance.net/coletivoboitata' target='_blank' rel='noreferrer noopener'>
      <Icone nome='behance' className={socialMediaStyles.icone} />
    </a>

    <a href='https://www.youtube.com/channel/UCY955yf9sGoJO1Dmn4R48BQ' target='_blank' rel='noreferrer noopener'>
      <Icone nome='youtube' className={socialMediaStyles.icone} />
    </a>
  </div>
);

SocialMedia.defaultProps = {
  className: '',
};

SocialMedia.propTypes = {
  className: PropTypes.string,
};

export default SocialMedia;
