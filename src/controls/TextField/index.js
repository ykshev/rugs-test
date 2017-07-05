import React from 'react';
import PropTypes from 'prop-types';

import './styles.sass';


export const TextField = ({
  className,
  input,
  bindedValue,
  type = 'text',
  meta: { touched, error, warning },
  placeholder,
}) =>
  <div className={`text-field ${ className || '' }`}>
    <div className={'text-field__inner'}>
      <input
        className={`text-field__input ${ touched && (error && '_error') }`}
        {...input}
        value={bindedValue}
        type={type}
        placeholder={placeholder || ''} />
      { touched &&
      ((error && <span className='text-field__error'>{error}</span>) ||
      (warning && <span>{warning}</span>)) }
    </div>
  </div>;

TextField.propTypes = {
  className: PropTypes.string,
  input: PropTypes.object.isRequired,
  type: PropTypes.string,
  meta: PropTypes.object.isRequired,
  placeholder: PropTypes.string,
  bindedValue: PropTypes.string,
};

export default TextField;
