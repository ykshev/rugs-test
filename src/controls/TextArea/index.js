import React from 'react';
import PropTypes from 'prop-types';

import './styles.sass';


export const TextArea = ({ input, meta: { touched, error, warning }, placeholder }) => (
  <div className='text-area'>
    <textarea className={`text-area__input ${ touched && (error && '_error') }`} {...input} placeholder={placeholder || ''} />
    {touched && ((error && <span className='text-area__error'>{error}</span>) || (warning && <span>{warning}</span>))}
  </div>
);

TextArea.propTypes = {
  input: PropTypes.object.isRequired,
  meta: PropTypes.object.isRequired,
  placeholder: PropTypes.string,
};

export default TextArea;
