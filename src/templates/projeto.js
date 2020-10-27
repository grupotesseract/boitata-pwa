import React, { useState } from 'react';
import Layout from '../components/Layout';
import styles from '../styles/templates/projeto.module.scss';
import { Button, Row, Col } from 'antd';
import Icone from '../components/Icone';
import Categorias from '../components/Categorias';
import BotaoScrollTopo from '../components/BotaoScrollTopo'
import { uniqueId } from 'lodash';
import { Link } from 'gatsby';
import { graphql } from 'gatsby';

const Projeto = ({ data, pageContext }) => {
  const projeto = data.contentfulProjetos;
  const { next, prev } = pageContext;

  const descricao = {
    ptBr: projeto.description.description,
    en: projeto.descriptionEnUs?.descriptionEnUs
  }

  const [linguagemDescricao, setLinguagemDescricao] = useState('ptBr');

  const onPtBrBotaoClick = () => {
    setLinguagemDescricao('ptBr')
  }

  const onEnBotaoClick = () => {
    setLinguagemDescricao('en')
  }

  return (
    <Layout>
      <div className={styles.container}>
        <BotaoScrollTopo />

        <Row>
          <Col lg={24}>
            <Link
              to='/portfolio'
              state={{ categoriaAtual: 'TODOS' }}
              className={styles.fechar}
            >
              X Fechar
            </Link>
          </Col>
        </Row>

        <Row className={styles.header}>
          <Col xs={24} lg={24}>
            <div className={styles.containerTitulo}>
              <Button icon={<Icone nome='setaEsquerda' />} className={styles.setaEsquerda} type='link' href={prev?.slug}/>

              <h1>{projeto.name}</h1>

              <Button icon={<Icone nome='setaDireita' />} className={styles.setaDireita} type='link' href={next?.slug} />
            </div>
          </Col>
        </Row>

        <Row align='bottom' justify='end'>
          <Col xs={24} lg={12}>
            <div className={styles.containerDescricao}>
              <p className={styles.descricao}>
                {descricao[linguagemDescricao]}
              </p>

              <div className={styles.containerBotoesLinguagem}>
                <Button
                  type='link'
                  onClick={onPtBrBotaoClick}
                >
                  PT
                </Button>
                  -
                <Button
                  type='link'
                  onClick={onEnBotaoClick}
                >
                  EN
                </Button>
              </div>
            </div>
          </Col>

          <Col xs={24} lg={12}>
            <div className={styles.categorias}>
              <Categorias categorias={projeto.tags.map(tag => tag.toUpperCase())} comHashtag/>
            </div>
          </Col>
        </Row>

        <Row>
          <Col xs={24} lg={24}>
            <div className={styles.containerImagem}>
              {projeto.images.map((imagem, index) => (
                <img src={imagem} alt={`imagem ${index + 1}`} key={uniqueId('imagem_')} />
              ))}
            </div>
          </Col>
        </Row>
      </div>
    </Layout>
  );
};

export default Projeto;

export const pageQuery = graphql`
  query (
    $slug: String
  ) {
    contentfulProjetos (
      slug: {
        eq: $slug
      }
    ) {
      name
      description {
        description
      }
      descriptionEnUs {
        descriptionEnUs
      }
      tags
      cover
      images
    }
  }
`
