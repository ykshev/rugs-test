import React from 'react';
import PropTypes from 'prop-types';

import './styles.sass';


export const Checkbox = ({ id, input, checked, type = 'checkbox', meta: { touched, error, warning }, children }) => (
  <div className='checkbox'>
    <input id={input.name} className={`checkbox__input ${ touched && (error && '_error') }`} {...input} checked={checked} type={type} />
    <label htmlFor={input.name} className='checkbox__label'>{ children }</label>
    {touched && ((error && <span className='checkbox__error'>{error}</span>) || (warning && <span>{warning}</span>))}
  </div>
);

Checkbox.propTypes = {
  input: PropTypes.object.isRequired,
  type: PropTypes.string,
  meta: PropTypes.object.isRequired,
  children: PropTypes.node,
  checked: PropTypes.bool,
  id: PropTypes.string,
};

export default Checkbox;
