// React
import React from 'react';

// NPM Modules
import { StyleSheet, css } from 'aphrodite';
import { Link } from 'react-router-dom';

// Local Helper Files & Components
import { animations } from '../../stylesheets/Animations.js';

export default class Application extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      appOpen: true
    };
  }

  render() {
    document.title = 'Application - Pi Sigma Epsilon | Zeta Chi Chapter';

    return (
      <div className={css(styles.appContainer, animations.fadeIn)}>
        <h1 className={css(styles.header)}>Fall 2017 Application</h1>
        {this.state.appOpen
          ? <div>
              <p className={css(styles.description)}>
                Our application is open!
                <br />
                Application Link:{' '}
                <Link
                  to={'https://goo.gl/forms/8KGd6b5YIPdYHFoV2'}
                  className={css(styles.link)}
                  target="blank"
                >
                  https://goo.gl/forms/8KGd6b5YIPdYHFoV2
                </Link>
                <br />
                The deadline is Thursday (9/7) at 11:59PM. Good luck!
              </p>
              <div className={css(styles.imageContainer)}>
                <Link
                  to={'https://goo.gl/forms/8KGd6b5YIPdYHFoV2'}
                  className={css(styles.link)}
                  target="blank"
                >
                  <img
                    src={'../images/app_image.jpg'}
                    alt={'image link to application'}
                    className={css(styles.appImage)}
                  />
                </Link>
              </div>
            </div>
          : <div>
              <p className={css(styles.description)}>
                The Fall 2017 Application will open after our Meet the Chapter
                event.
                <br />
                If you would like notifications for our recruitment events,
                please enter your email below.
              </p>
              <div className={css(styles.formContainer)}>
                <iframe
                  title="Fall 2017 Pre-Registration"
                  className="center-block"
                  src="https://docs.google.com/a/berkeley.edu/forms/d/e/1FAIpQLSfua72kmqeFJYEpLEZiuUd30vMqJWxUuqKxCQ_tHExJoerndg/viewform?embedded=true"
                  width="100%"
                  height="950"
                  frameBorder="0"
                  marginHeight="0"
                  marginWidth="0"
                >
                  Loading...
                </iframe>
              </div>
            </div>}
      </div>
    );
  }
}

const styles = StyleSheet.create({
  appContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },

  header: {
    color: '#895FAD',
    fontFamily: 'Lato, sans-serif',
    fontSize: '3em',
    fontWeight: '500',
    margin: '0',
    padding: '30px 0',
    textAlign: 'center'
  },

  description: {
    color: '#303030',
    fontFamily: 'Open Sans, sans-serif',
    fontSize: '1em',
    margin: '0',
    textAlign: 'center'
  },

  formContainer: {
    padding: '20px 0',
    width: '800px',
    '@media(max-width: 768px)': {
      width: '100%'
    }
  },

  link: {
    textDecoration: 'none',
    color: '#895FAD',
    ':hover': {
      color: '#FFD700'
    }
  },

  imageContainer: {
    border: '3px solid #895FAD',
    margin: '20px 0',
    width: '800px',
    '@media(max-width: 768px)': {
      width: '100%'
    }
  },

  appImage: {
    width: '100%',
    height: '100%'
  }
});
