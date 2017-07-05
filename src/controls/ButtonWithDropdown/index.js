import React from 'react';
import PropTypes from 'prop-types';

import { Button } from '../Button';
import './styles.sass';


export class ButtonWithDropdown extends Button {
  static propTypes = Object.assign(
    {},
    Button.prototype.propTypes,
    {
      children: PropTypes.node,
      setDropdown: PropTypes.func.isRequired,
      isDropdown: PropTypes.bool.isRequired,
    },
  )

  render() {
    const { className, text, children, setDropdown, isDropdown } = this.props;
    return <button
      className={`button _with-dropdown ${ className || '' } ${ isDropdown ? '_active' : '' }`}
      onClick={() => setDropdown(!isDropdown)}>
      <div className='button__text'>{ text }</div>
      <div className='button__dropdown' onClick={e => e.stopPropagation()}>{ children }</div>
    </button>;
  }
}

export default ButtonWithDropdown;
