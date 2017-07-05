import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';

import { TextField } from 'controls/TextField';


export const SizeFilter = ({ className, setFilter, filter }) =>
  <div className={`filter ${ className } || ''`}>
    <div className='filter__title'>Размер</div>
    <form className='form filter__form'>
      <div className='form__item _double'>
        <label className='form__label'>Ширина, см</label>
        <Field
          className='form__field _sm'
          name='wFrom'
          onChange={(e, v) => { setFilter({ wFrom: v }); }}
          component={TextField}
          bindedValue={filter.wFrom}
          type='number'
          placeholder='От' />
        <Field
          className='form__field _sm'
          name='wTo'
          onChange={(e, v) => { setFilter({ wTo: v }); }}
          component={TextField}
          bindedValue={filter.wTo}
          type='number'
          placeholder='До' />
      </div>
      <div className='form__item _double'>
        <label className='form__label'>Длина, см</label>
        <Field
          className='form__field _sm'
          name='hFrom'
          onChange={(e, v) => { setFilter({ hFrom: v }); }}
          component={TextField}
          bindedValue={filter.hFrom}
          type='number'
          placeholder='От' />
        <Field
          className='form__field _sm'
          name='hTo'
          onChange={(e, v) => { setFilter({ hTo: v }); }}
          component={TextField}
          bindedValue={filter.hTo}
          type='number'
          placeholder='До' />
      </div>
    </form>
  </div>;

SizeFilter.propTypes = {
  className: PropTypes.string,
  setFilter: PropTypes.func.isRequired,
  filter: PropTypes.object,
};

export default SizeFilter;
