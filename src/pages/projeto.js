import React, { useState } from 'react';
import Layout from '../components/Layout';
import styles from '../styles/pages/projeto.module.scss';
import { Button, Row, Col } from 'antd';
import Icone from '../components/Icone';
import Categorias from '../components/Categorias';
import BotaoScrollTopo from '../components/BotaoScrollTopo'

const Projeto = () => {
  //TODO: Substituir descricao por dados do contentful
  const descricao = {
    ptBr: 'Na Lata é um projeto nosso feito em parceira com @cafejoaodopo com muito carinho onde escolhemos 3 frases para ilustrar e se transformarem em lindas latas metálica decorativas. São latas para colocar café ou para qualquer outra coisa que você queira fazer com elas. São alegres, de bem com a vida (depois das 9h), não falam mal de ninguém... Ah é, elas vão bem em qualquer ambiente, juntas ou separadas',
    en: 'Description in english'
  }

  const [linguagemDescricao, setLinguagemDescricao] = useState('ptBr');

  const onPtBrBotaoClick = () => {
    setLinguagemDescricao('ptBr')
  }

  const onEnBotaoClick = () => {
    setLinguagemDescricao('en')
  }

  //TODO: Substituir titulo, categorias e imagens por dados do contentful
  const titulo = 'COLEÇÃO DE LATAS ILUSTRADAS - NA LATA';
  const categorias = [
    {
      nome: 'identidade visual',
      href: ''
    },
    {
      nome: 'ilustração',
      href: ''
    },
  ]

  const imagens = [
    'https://mir-s3-cdn-cf.behance.net/project_modules/disp/dd1a05101643141.5f23381da7fe8.jpg',
    'https://mir-s3-cdn-cf.behance.net/project_modules/disp/60f570101643141.5f23381da7a45.jpg',
    'https://mir-s3-cdn-cf.behance.net/project_modules/disp/baeb13101643141.5f23381da9284.jpg',
    'https://mir-s3-cdn-cf.behance.net/project_modules/disp/2362f8101643141.5f23381da9896.jpg'
  ]

  return (
    <Layout>
      <div className={styles.container}>
        <BotaoScrollTopo />

        <Row>
          <Col lg={24}>
            <Button
              type='link'
              href='/portfolio'
              className={styles.botaoFechar}
            >
              X Fechar
            </Button>
          </Col>
        </Row>

        <Row className={styles.header}>
          <Col xs={24} lg={24}>
            <div className={styles.containerTitulo}>
              <Button icon={<Icone nome='setaEsquerda' />} className={styles.setaEsquerda} />

              <h1 className={styles.titulo}>{titulo}</h1>

              <Button icon={<Icone nome='setaDireita' />} className={styles.setaDireita} />
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
              <Categorias categorias={categorias} comHashtag/>
            </div>
          </Col>
        </Row>

        <Row>
          <Col xs={24} lg={24}>
            <div className={styles.containerImagem}>
              {imagens.map((imagem, index) => (
                <img src={imagem} alt={`imagem ${index + 1}`} />
              ))}
            </div>
          </Col>
        </Row>
      </div>
    </Layout>
  );
};

export default Projeto;
