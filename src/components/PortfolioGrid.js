import React from 'react';
import { chunk } from 'lodash';
import styles from '../styles/components/portfolioGrid.module.scss';

const PortfolioGrid = () => {
  //TODO: Imagens de testes, substituir por dados do Contentful
  const imagens = [
    {
      src: 'https://mir-s3-cdn-cf.behance.net/projects/404/d991a7101643141.Y3JvcCwzNDM2LDI2ODcsMCw4.jpg',
      titulo: 'BODEGA',
      tags: 'identidade visual, editorial, motion, motion, motion, editorial, testetaggrande'
    },
    {
      src: 'https://mir-s3-cdn-cf.behance.net/projects/404/0911cd97182545.Y3JvcCw4MjksNjQ5LDI4NSww.gif',
      titulo: 'BODEGA',
      tags: 'identidade visual, editorial, motion'
    },
    {
      src: 'https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/e1b52279225595.5cbd3fd774ab0.jpg',
      titulo: 'BODEGA',
      tags: 'identidade visual, editorial, motion'
    },
    {
      src: 'https://mir-s3-cdn-cf.behance.net/projects/404/02543279225595.Y3JvcCw5MTEsNzEzLDQ3NCwyMDU.jpg',
      titulo: 'FESTIVAL DE ARTES CÊNICAS DE BAURU',
      tags: 'IDENTIDADE VISUAL, EDITORIAL, MOTION'
    },
    {
      src: 'https://mir-s3-cdn-cf.behance.net/projects/404/6c135a80758357.Y3JvcCw5OTQsNzc4LDIwMSww.jpg',
      titulo: 'BODEGA',
      tags: 'identidade visual, editorial, motion'
    },
    {
      src: 'https://mir-s3-cdn-cf.behance.net/projects/404/02543279225595.Y3JvcCw5MTEsNzEzLDQ3NCwyMDU.jpg',
      titulo: 'BODEGA',
      tags: 'identidade visual, editorial, motion'
    },
    {
      src: 'https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/e1b52279225595.5cbd3fd774ab0.jpg',
      titulo: 'BODEGA',
      tags: 'identidade visual, editorial, motion'
    },
    {
      src: 'https://mir-s3-cdn-cf.behance.net/projects/404/11104597.5480eb86ae132.jpg',
      titulo: 'BODEGA',
      tags: 'identidade visual, editorial, motion'
    },
    {
      src: 'https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/e1b52279225595.5cbd3fd774ab0.jpg',
      titulo: 'BODEGA',
      tags: 'identidade visual, editorial, motion'
    },
    {
      src: 'https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/e1b52279225595.5cbd3fd774ab0.jpg',
      titulo: 'BODEGA',
      tags: 'identidade visual, editorial, motion'
    },
    {
      src: 'https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/e1b52279225595.5cbd3fd774ab0.jpg',
      titulo: 'BODEGA',
      tags: 'identidade visual, editorial, motion'
    },
    {
      src: 'https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/e1b52279225595.5cbd3fd774ab0.jpg',
      titulo: 'BODEGA',
      tags: 'identidade visual, editorial, motion'
    },
    {
      src: 'https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/e1b52279225595.5cbd3fd774ab0.jpg',
      titulo: 'BODEGA',
      tags: 'identidade visual, editorial, motion'
    },
    {
      src: 'https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/e1b52279225595.5cbd3fd774ab0.jpg',
      titulo: 'BODEGA',
      tags: 'identidade visual, editorial, motion'
    },
    {
      src: 'https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/e1b52279225595.5cbd3fd774ab0.jpg',
      titulo: 'BODEGA',
      tags: 'identidade visual, editorial, motion'
    },
  ];

  const gruposDeImagens = chunk(imagens, 15);

  return (
    <div className={styles.container}>
      {
        gruposDeImagens.map((grupoDeImagens, index) => (
          <div className={styles.portfolio}>
            {grupoDeImagens.map((imagem, index) => {
              const portfolioItemBaseClassName = styles.portfolioItem;
              const portfolioItemNumberClassName = styles[`portfolioItem${index + 1}`];
              const containerClassName = `${portfolioItemBaseClassName} ${portfolioItemNumberClassName}`;

              return (
                <div className={containerClassName}>
                  <img src={imagem.src} alt="Imagem do Portfólio" className={styles.portfolioImg} />

                  <div className={styles.descricao}>
                    <p className={styles.titulo}>{imagem.titulo}</p>
                    <p className={styles.tags}>{imagem.tags}</p>
                  </div>
                </div>
              );
            })}
          </div>
        ))
      }
    </div>
  );
};

export default PortfolioGrid;
