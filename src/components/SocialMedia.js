import React from 'react'
import PropTypes from 'prop-types';
import Icone from './Icone';
import styles from '../styles/components/socialMedia.module.scss'

const SocialMedia = ({ className }) => (
  <div className={className}>
    <a href='https://www.instagram.com/coletivoboitata/' target='_blank' rel='noreferrer noopener'>
      <Icone nome='instagram' className={styles.icone} />
    </a>

    <a href='https://www.facebook.com/coletivoboitata' target='_blank' rel='noreferrer noopener'>
      <Icone nome='facebook' className={styles.icone} />
    </a>

    <a href='https://www.behance.net/coletivoboitata' target='_blank' rel='noreferrer noopener'>
      <Icone nome='behance' className={styles.icone} />
    </a>

    <a href='https://www.youtube.com/channel/UCY955yf9sGoJO1Dmn4R48BQ' target='_blank' rel='noreferrer noopener'>
      <Icone nome='youtube' className={`${styles.icone} ${styles.iconeYoutube}`} />
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
