import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';

import { Checkbox } from 'controls/Checkbox';


export const CountryFilter = ({ className, setFilter, filter }) =>
  <div className={`filter ${ className } || ''`}>
    <div className='filter__title'>Страна</div>
    <form className='form filter__form'>
      <div className='form__item'>
        <Field
          className='form__field'
          name='iran'
          onChange={(e, v) => { setFilter({ name: 'Иран', value: v }); }}
          checked={!!filter.find(el => el === 'Иран')}
          component={Checkbox} >
          Иран
        </Field>
      </div>
      <div className='form__item'>
        <Field
          className='form__field'
          name='belgium'
          onChange={(e, v) => { setFilter({ name: 'Бельгия', value: v }); }}
          checked={!!filter.find(el => el === 'Бельгия')}
          component={Checkbox} >
          Бельгия
        </Field>
      </div>
      <div className='form__item'>
        <Field
          className='form__field'
          name='iraq'
          onChange={(e, v) => { setFilter({ name: 'Ирак', value: v }); }}
          checked={!!filter.find(el => el === 'Ирак')}
          component={Checkbox} >
          Ирак
        </Field>
      </div>
      <div className='form__item'>
        <Field
          className='form__field'
          name='bulgaria'
          onChange={(e, v) => { setFilter({ name: 'Болгария', value: v }); }}
          checked={!!filter.find(el => el === 'Болгария')}
          component={Checkbox} >
          Болгария
        </Field>
      </div>
    </form>
  </div>;

CountryFilter.propTypes = {
  className: PropTypes.string,
  setFilter: PropTypes.func.isRequired,
  filter: PropTypes.array,
};

export default CountryFilter;
