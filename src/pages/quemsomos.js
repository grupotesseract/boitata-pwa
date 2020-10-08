import React from 'react';
import Layout from '../components/Layout';
import { Row, Col } from 'antd';
import Fade from '../components/animacoes/Fade'
import Behance from '../assets/icons/behance.svg';
import Facebook from '../assets/icons/facebook.svg';
import Instagram from '../assets/icons/instagram.svg';
import fotoCaroline from '../assets/quemSomos/caroline-gomes.png';
import fotoThomas from '../assets/quemSomos/thomas-musmann.png';
import imagemHeader from '../assets/quemSomos/imagem_header.jpg';
import nuvens from '../assets/quemSomos/nuvens.png';
import passaros from '../assets/quemSomos/passaros.png';
import flores from '../assets/quemSomos/flores.png';
import styles from '../styles/pages/quemSomos.module.scss';

const QuemSomos = () => (
  <Layout>
    <div className={styles.container}>
      <Row>
        <Col xs={24} lg={24} className={styles.header}>
          <img src={imagemHeader} alt='Foto membros' />

          <div className={styles.titulo}>
            <Fade>
              <h1>Quem</h1>
              <h2>Somos</h2>
            </Fade>
          </div>
        </Col>
      </Row>

      <Row className={styles.introducaoUm}>
        <Col xs={24} lg={24}>
          <div className={styles.containerBackgroundUm} />

          <p>
            Somos uma empresa de criação <br/>
            movida pela vontade de criar
          </p>

          <div className={styles.textoComDestaque}> experiências únicas</div>

          <img src={nuvens} alt='Ilustração nuvens' className={styles.nuvens} />
        </Col>
      </Row>

      <Row className={styles.introducaoDois}>
        <Col lg={2}>
          <div className={styles.containerRetangulo} />
        </Col>

        <Col xs={24} lg={10}>
          <p>
            <span>
              SOMOS INQUIETOS E GOSTAMOS DE <br />
              AJUDAR PESSOAS INQUIETAS <br />
            </span>
            a colocarem suas ideias no mundo usando <br />
            criatividade, afeto e força coletiva.
          </p>
        </Col>
      </Row>

      <Row className={styles.descricao}>
        <Col xs={8} md={10} lg={10}>
          <div className={styles.containerPassaros}>
            <img src={passaros} alt='Ilustração passaros' />
          </div>
        </Col>

        <Col xs={16} md={{ span: 11, offset: 1}} lg={{ span: 10, offset: 2}}>
          <p>
            Aqui vai um textinho que fala da nossa formação e
            fecha na gente: passaram pelo Boitatá outros(as)
            designers que foram muito importante para que
            pudéssemos nos estruturar da forma como somos
            hoje: uma empresa que tem como principais valores o
            trabalho coletivo e a criatividade. Acho que vai ser um
            pouquinho maior do que isso.
          </p>
        </Col>
      </Row>

      <Row className={styles.containerGif}>
        <Col xs={24} lg={12}>
          {/* TODO: adicionar gif quando estiver pronto */}
        </Col>

        <Col xs={24} lg={10} className={styles.textoInclinado}>
            <p className={styles.linhaUm}>Esse é o Boitatá</p>
            <p className={styles.linhaDois}>uma mistura doida <br /> de várias coisas</p>
            <p className={styles.linhaTres}>resultantes da soma de</p>
            <p className={styles.linhaQuatro}>ideias contrastante</p>
            <p className={styles.linhaCinco}>de dois designers <br /> inquietos </p>
        </Col>
      </Row>

      <Row justify='center'>
        <Col xs={24} md={12} lg={12} className={styles.infos}>
          <p>
            Nossa atuação passa pelo design gráfico impresso,
            atravessa as redes sociais, ganha vida por meio de vídeos,
            animações, sites, aplicativos e nono nono nononononon
            nono no no . [vamos terminar essa frase ainda]
          </p>
        </Col>
      </Row>

      <Row className={styles.textoComBackground} justify='center'>
        <Col xs={24} lg={12}>
          <p>
            Nós acreditamos que o design, além de ser uma <br />
            ferramenta para solucionar diferentes tipos <br />
            de problemas, é acima de todas as suas funções, <br />
            uma forma de ver e sentir o mundo <br />
            <span>Design é tradução e empatia.</span>
          </p>
        </Col>

        <Col xs={24} lg={12} style={{ zIndex: 5}}>
          <div className={styles.containerBackgroundDois} />

          <img src={flores} alt='Ilustração flores' className={styles.flores} />
        </Col>
      </Row>

      <Row className={styles.membros}>
        <Col xs={11} md={10} lg={12} className={styles.imagemEsquerda}>
          <div className={styles.background}/>
          <img src={fotoCaroline} alt='Foto' />
        </Col>

        <Col xs={12} md={12} lg={12} className={styles.membroDescricao}>
          <h3>Caroline Gomes</h3>

          <p>
            Mulher, designer, artista, professora... Ela
            ainda não sabe se tem uma área do design
            que gosta mais, enquanto isso, ela vai se
            aventurando por aí... Das paixões já
            descobertas estão a diagramação (ela
            gosta de organizar coisas), a ilustração e
            essa coisa toda de "dar aulas". Saudosista,
            adora um bom material impresso... e quer
            trazer mais projetos com ilustração para o
            Boitatá. No tempo livre ela gosta de
            desenhar, dançar, ler e escrever.
          </p>

          <div className={styles.socialMedia}>
            <a href="https://www.instagram.com/carolgomes.art/" target="_blank" rel="noreferrer noopener">
              <Instagram />
            </a>

            <a href="https://www.facebook.com/caroline.gomes.7" target="_blank" rel="noreferrer noopener">
              <Facebook />
            </a>

            <a href="https://www.behance.net/carolinegomes" target="_blank" rel="noreferrer noopener">
              <Behance />
            </a>
          </div>
        </Col>
      </Row>

      <Row className={styles.membros}>
        <Col
          xs={{ span: 12, offset: 1}}
          md={{ span: 11, offset: 2}}
          lg={{ span: 9, offset: 3}}
          xxl={{ span: 9, offset: 2}}
          className={styles.membroDescricao}
        >
          <h3>Thomas Musmann</h3>

          <p>
            Apaixonado por design desde o primeiro
            dia de faculdade, nunca questionou se
            esse era mesmo o seu caminho certo.
            Curioso, sempre se aventura em novos
            caminhos dentro da área. No momento,
            nadando no mundo da animação e do
            branding, mas sempre em busca de
            novos desafios, áreas a serem
            descobertas. Sem limites na vontade de
            inovar e fazer diferente. Acredita que é
            com o trabalho coletivo que os
            melhores projetos são criados.
          </p>

          <div className={styles.socialMedia}>
            <a href="https://www.instagram.com/thomasmusmann/" target="_blank" rel="noreferrer noopener">
              <Instagram />
            </a>

            <a href="https://www.facebook.com/thomasmusmannc" target="_blank" rel="noreferrer noopener">
              <Facebook />
            </a>

            <a href="https://www.behance.net/thomasmusmann" target="_blank" rel="noreferrer noopener">
              <Behance />
            </a>
          </div>
        </Col>

        <Col
          xs={{ span: 11}} lg={12}
          xxl={{ span: 11, offset: 1}}
          className={styles.imagemDireita}
        >
          <div className={styles.background}/>
          <img src={fotoThomas} alt='Foto' />
        </Col>
      </Row>
    </div>
  </Layout>
);

export default QuemSomos;
