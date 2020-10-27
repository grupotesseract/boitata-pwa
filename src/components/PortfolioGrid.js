import React from 'react';
import { Link } from 'gatsby';
import { chunk, uniqueId } from 'lodash';
import styles from '../styles/components/portfolioGrid.module.scss';

const PortfolioGrid = ({ projetos }) => {
  const gruposDeProjetos = chunk(projetos, 15);

  return (
    <div className={styles.container}>
      {
        gruposDeProjetos.map((grupoDeProjeto, index) => (
          <div key={uniqueId('grupo_de_projeto_')} className={styles.portfolio}>
            {grupoDeProjeto.map((projeto, index) => {
              const portfolioItemBaseClassName = styles.portfolioItem;
              const portfolioItemNumberClassName = styles[`portfolioItem${index + 1}`];
              const containerClassName = `${portfolioItemBaseClassName} ${portfolioItemNumberClassName}`;

              return (
                <Link to={`/portfolio/${projeto.slug}`} key={uniqueId('projeto_')} className={containerClassName}>
                  <img src={projeto.cover} alt="Imagem do Portfólio" className={styles.portfolioImg} />

                  <div className={styles.descricao}>
                    <p className={styles.nome}>{projeto.name}</p>
                    <p className={styles.categorias}>{projeto.tags.join(', ')}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        ))
      }
    </div>
  );
};

export default PortfolioGrid;
