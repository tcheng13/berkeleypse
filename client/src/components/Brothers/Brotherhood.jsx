// React
import React from 'react';

// NPM Modules
import { StyleSheet, css } from 'aphrodite';

// Local Helper Files & Components
import { animations } from '../../stylesheets/Animations.js';
import { brotherList } from './brotherhood_constants';
import { BrotherImage } from './BrotherImage.jsx';

const Brotherhood = props => {
  document.title = 'Brotherhood - Pi Sigma Epsilon | Zeta Chi Chapter';

  const allBrothers = brotherList.map(brother => {
    return <BrotherImage brother={brother} key={brother} page="bros" />;
  });

  return (
    <div className={css(animations.fadeIn) + ' brotherhood-container'}>
      <div className={css(styles.landingContainer)}>
        <img
          src={'../images/brotherhood.jpg'}
          className={css(styles.image)}
          alt={'Pi Sigma Epsilon brotherhood'}
        />
        <h1 className={css(styles.header)}>Our Brotherhood</h1>
      </div>
      <div className={css(styles.allBrosContainer)}>{allBrothers}</div>
    </div>
  );
};

export default Brotherhood;

const styles = StyleSheet.create({
  landingContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '30px'
  },

  image: {
    maxWidth: '100%',
    position: 'relative'
  },

  header: {
    color: '#FFF',
    fontFamily: 'Lato, sans-serif',
    fontSize: '3em',
    fontWeight: '500',
    letterSpacing: '0.025em',
    margin: '0',
    padding: '30px 0',
    textAlign: 'center',

    position: 'absolute',
    width: '100%'
  },

  allBrosContainer: {
    textAlign: 'center'
  }
});
