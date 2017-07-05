import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';

import { Checkbox } from 'controls/Checkbox';


export const MaterialFilter = ({ className, setFilter, filter }) =>
  <div className={`filter ${ className } || ''`}>
    <div className='filter__title'>Материал</div>
    <form className='form filter__form'>
      <div className='form__item'>
        <Field
          className='form__field'
          name='silk'
          onChange={(e, v) => { setFilter({ name: 'Шелк', value: v }); }}
          checked={!!filter.find(el => el === 'Шелк')}
          component={Checkbox} >
          Шелк
        </Field>
      </div>
      <div className='form__item'>
        <Field
          className='form__field'
          name='bamboo'
          onChange={(e, v) => { setFilter({ name: 'Бамбук', value: v }); }}
          checked={!!filter.find(el => el === 'Бамбук')}
          component={Checkbox} >
          Бамбук
        </Field>
      </div>
      <div className='form__item'>
        <Field
          className='form__field'
          name='wool'
          onChange={(e, v) => { setFilter({ name: 'Шерсть', value: v }); }}
          checked={!!filter.find(el => el === 'Шерсть')}
          component={Checkbox} >
          Шерсть
        </Field>
      </div>
      <div className='form__item'>
        <Field
          className='form__field'
          name='skin'
          onChange={(e, v) => { setFilter({ name: 'Кожа', value: v }); }}
          checked={!!filter.find(el => el === 'Кожа')}
          component={Checkbox} >
          Кожа
        </Field>
      </div>
    </form>
  </div>;

MaterialFilter.propTypes = {
  className: PropTypes.string,
  setFilter: PropTypes.func.isRequired,
  filter: PropTypes.array,
};

export default MaterialFilter;
