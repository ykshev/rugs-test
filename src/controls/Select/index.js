import React from 'react';
import PropTypes from 'prop-types';

import './styles.sass';


export const Select = ({ input, meta: { touched, error, warning }, children }) => (
  <div className='select'>
    <select className={`select__input ${ touched && (error && '_error') }`} {...input}>
      {children}
    </select>
    {touched && ((error && <span className='select__error'>{error}</span>) || (warning && <span>{warning}</span>))}
  </div>
);

Select.propTypes = {
  input: PropTypes.object.isRequired,
  meta: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
};

export default Select;
