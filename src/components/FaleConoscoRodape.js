import React from 'react'
import { Row, Col } from 'antd';
import TituloContato from './TituloContato';
import SocialMedia from './SocialMedia';
import FormularioContato from './FormularioContato';
import styles from '../styles/components/faleConoscoRodape.module.scss'

const FaleConoscoRodape = () => (
  <div className={styles.container}>
    <div className={styles.conteudo}>
      <Row>
        <Col xs={24} lg={12}>
          <div className={styles.containerBackground} />

          <div className={styles.containerTitulo}>
            <TituloContato tema='alternativo' />

            <p className={styles.descricao}>
              Mande sua proposta de projeto,<br />
              sugestões, dicas, comentário.<br />
              Vamos bater um papo!
            </p>

            <SocialMedia />

            <a href={'mailto:contato@coletivoboitata.com.br'} target='_blank' rel='noopener noreferrer'>
              <p className={styles.email}>contato@coletivoboitata.com.br</p>
            </a>
          </div>
        </Col>

        <Col xs={24} lg={12}>
          <div className={styles.containerFormulario}>
            <FormularioContato tema='alternativo' orientacao='horizontal'/>
          </div>
        </Col>
      </Row>
    </div>
  </div>
);

export default FaleConoscoRodape;
