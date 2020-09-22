import React from 'react'
import PropTypes from 'prop-types';
import { Form, Input, Button, Row, Col } from 'antd';
import styles from '../styles/components/formularioContato.module.scss';

const FormularioContato = ({ tema, orientacao }) => {
  const temas = {
    default: styles.container,
    alternativo: styles.containerAlternativo
  };

  const colunas = orientacao === 'vertical' ? 24 : 12;

  return (
    <div className={temas[tema]}>
      <h3 className={styles.titulo}>Deixe sua mensagem abaixo e nós entraremos em contato.</h3>

      <Form className={styles.form}>
        <Row gutter={10}>
          <Col xs={24} lg={colunas}>
            <Form.Item className={styles.containerInput}>
              <label htmlFor='nome'>Nome</label>
              <Input id='nome'/>
            </Form.Item>

            <Form.Item className={styles.containerInput}>
              <label htmlFor='email'>E-mail</label>
              <Input id='email'/>
            </Form.Item>

            <Form.Item className={styles.containerInput}>
              <label htmlFor='assunto'>Assunto</label>
              <Input id='assunto'/>
            </Form.Item>
          </Col>

          <Col xs={24} lg={colunas}>
            <Form.Item className={styles.containerInput}>
              <label htmlFor='mensagem'>Mensagem</label>
              <Input.TextArea id='mensagem' autoSize={{ minRows: 9, maxRows: 9 }}/>
            </Form.Item>
          </Col>
        </Row>

        <Form.Item>
          <Button>Enviar</Button>
        </Form.Item>
      </Form>
    </div>
  );
};

FormularioContato.propTypes = {
  tema: PropTypes.oneOf(['default', 'alternativo']),
  orientacao: PropTypes.oneOf(['vertical', 'horizontal'])
};

FormularioContato.defaultProps = {
  tema: 'default',
  orientacao: 'vertical'
};

export default FormularioContato;
