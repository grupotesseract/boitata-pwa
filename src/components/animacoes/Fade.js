import React from 'react';
import PropTypes from 'prop-types';
import { InView } from 'react-intersection-observer';
import { Spring } from 'react-spring/renderprops';

const Fade = ({ children, direcao }) => {
  const direcoes = {
    up: {
      from: { opacity: 0, transform: 'translate3d(0, 50%, 0)'},
      to: { opacity: 1, transform: 'translate3d(0, 0, 0)'}
    }
  };

  return (
    <InView triggerOnce>
      {({ inView, ref }) => {
        if (!inView) {
          return <div ref={ref} style={{ visibility: 'hidden' }}>{children}</div>;
        }

        return (
          <div ref={ref}>
            <Spring
              {...direcoes[direcao]}
              config={{ duration: 700}}
            >
              {props => <div style={props}>{children}</div>}
            </Spring>
          </div>
        )}
      }
    </InView>
  );
};

Fade.propTypes = {
  direcao: PropTypes.oneOf(['up']),
  children: PropTypes.node.isRequired,
};

Fade.defaultProps = {
  direcao: 'up',
};

export default Fade;
