import React from 'react';
import PropTypes from 'prop-types';

import './styles.sass';


export class Button extends React.Component {
  static propTypes = {
    clickHandler: PropTypes.func,
    className: PropTypes.string,
    text: PropTypes.string,
  }

  render() {
    const { clickHandler, className, text } = this.props;
    return <button
      className={`button ${ className || '' }`}
      onClick={() => clickHandler ? clickHandler() : false}>
      <div className='button__text'>{ text }</div>
    </button>;
  }
}

export default Button;
