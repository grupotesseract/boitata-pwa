import React from 'react';
import { Row, Col } from 'antd';
import Layout from '../components/Layout';
import RodapeContato from '../components/RodapeContato';
import faleConoscoImg from '../assets/fale_conosco.jpg';
import TituloContato from '../components/TituloContato';
import FormularioContato from '../components/FormularioContato';
import Fade from '../components/animacoes/Fade';
import Icone from '../components/Icone';
import styles from '../styles/pages/contato.module.scss';

const Contato = () => (
  <Layout rodape={<RodapeContato />}>
    <div className={styles.container}>
      <div className={styles.containerBackgroundTop} />
      <div className={styles.containerBackgroundBottom} />

      <Row justify="center">
        <Col xs={{ span: 24, order: 2 }} lg={{ span: 11, order: 0 }} xl={10}>
          <div className={styles.fotoMembros}>
            <img src={faleConoscoImg} alt="Fale conosco" />
          </div>
        </Col>

        <Col xs={24} lg={12} className={styles.containerForm}>
          <Fade>
            <TituloContato />
          </Fade>

          <p className={styles.descricao}>
            Ainda não sabe bem do que <br />
            você e sua empresa precisam? <br />
            Vamos conversar e descobrir juntos.
          </p>

          <FormularioContato />
        </Col>
      </Row>

      <Row justify="center">
        <Col lg={24} className={styles.containerInfos}>
          <p>
            Se preferir, fale direto conosco pelo whatsapp ou pelo chat ali no
            cantinho. É só falar um oi ;)
          </p>
        </Col>
      </Row>

      <Row className={styles.containerContato}>
        <Col xs={24} lg={8} className={styles.containerSocialMedias}>
          <ul>
            <li style={{ textAlign: "left" }}>
              <a
                href="https://www.behance.net/coletivoboitata"
                target="_blank"
                rel="noreferrer noopener"
              >
                <Icone nome="behance" />
              </a>
              <a
                href="https://www.instagram.com/coletivoboitata/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <Icone nome="instagram" />
              </a>
              <a
                href="https://www.facebook.com/coletivoboitata"
                target="_blank"
                rel="noreferrer noopener"
              >
                <Icone nome="facebookRedondo" />
              </a>
              <span>/coletivoboitata</span>
            </li>

            <li className={styles.emailBoitata}>
              <a
                href={"mailto:contato@coletivoboitata.com.br"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icone nome="email" />
                contato@coletivoboitata.com.br
              </a>
            </li>
          </ul>
        </Col>

        <Col
          xs={24}
          lg={8}
          className={`${styles.infosContainer} ${styles.teste}`}
        >
          <ul>
            <li className={styles.nome}>Caroline Gomes</li>

            <li className={styles.telefone}>
              <a href="https://wa.me/5514988013273">
                <Icone nome="telefone" />
                55 14 988 013 273
              </a>
            </li>

            <li className={styles.email}>
              <a
                href={"mailto:caroline@coletivoboitata.com.br"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icone nome="email" />
                caroline@coletivoboitata.com.br
              </a>
            </li>
          </ul>
        </Col>

        <Col xs={24} lg={8} className={styles.infosContainer}>
          <ul>
            <li className={styles.nome}>Thomas Musmann</li>

            <li className={styles.telefone}>
              <a href="https://wa.me/5514988095605">
                <Icone nome="telefone" />
                55 14 988 095 605
              </a>
            </li>

            <li className={styles.email}>
              <a
                href={"mailto:thomas@coletivoboitata.com.br"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icone nome="email" />
                thomas@coletivoboitata.com.br
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </div>
  </Layout>
)

export default Contato;
