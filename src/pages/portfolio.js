import React, { useRef, useState, useEffect } from 'react';
import Layout from '../components/Layout';
import styles from '../styles/pages/portfolio.module.scss';
import { Button, Row, Col } from 'antd';
import PortfolioGrid from '../components/PortfolioGrid';
import Icone from '../components/Icone';

const Portfolio = () => {
  const tagsRef = useRef();
  const [temScroll, setTemScroll] = useState(false);

  const scroll = (scrollOffset) => {
    tagsRef.current.scrollLeft += scrollOffset;
  };

  const scrollParaEsquerda = () => {
    scroll(-50)
  };

  const scrollParaDireita = () => {
    scroll(50)
  };

  const atualizaTemScroll = () => {
    setTemScroll(
      tagsRef.current?.scrollWidth !== tagsRef.current?.offsetWidth
    );
  };

  useEffect(() => {
    atualizaTemScroll();
    window.addEventListener('resize', atualizaTemScroll);

    return () => window.removeEventListener('resize', atualizaTemScroll);
  }, [])

  //TODO: Substituir pelos dados do Contentful
  const tags = [
    'todos',
    'identidade visual',
    'editorial',
    'ilustração',
    'posters',
    'motion',
    'webdesing',
  ]

  return (
    <Layout>
      <div className={styles.container}>
        <Row>
          <Col xs={24} lg={{ span: 10, offset: 1 }} xl={{ span: 12, offset: 0 }}>
            <div className={styles.titulo}>
              <h1>Nosso</h1>
              <h2>Portfólio</h2>
            </div>
          </Col>

          <Col xs={24} lg={12} xl={12}>
            <div className={styles.descricao}>
              Conheça algumas <br />
              ideias que já <br />
              tomaram forma <br />

              <div className={styles.ponto}>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </Col>
        </Row>

        <Row align='middle' justify='center'>
          <Col lg={24}>
            {temScroll && <Button onClick={scrollParaEsquerda} icon={<Icone nome='setaEsquerda' />} className={styles.setaEsquerda} />}

            <div ref={tagsRef} className={styles.tags}>
              {tags.map(tag => (
                <Button type='link' className={styles.botaoTag}>
                  {tag}
                </Button>
              ))}

            </div>
              {temScroll && <Button onClick={scrollParaDireita} icon={<Icone nome='setaDireita' />} className={styles.setaDireita} />}
          </Col>
        </Row>

        <Row>
          <Col>
            <PortfolioGrid />
          </Col>
        </Row>
       </div>
    </Layout>
  );
};

export default Portfolio;
