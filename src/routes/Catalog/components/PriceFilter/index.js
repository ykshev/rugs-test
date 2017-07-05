import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';

import { Checkbox } from 'controls/Checkbox';
import 'components/Filter/styles.sass';
import 'controls/Form/styles.sass';


export const PriceFilter = ({ className, setFilter, filter }) =>
  <div className={`filter ${ className } || ''`}>
    <div className='filter__title'>Цена</div>
    <form className='form filter__form'>
      <div className='form__item'>
        <Field
          className='form__field'
          name='to3'
          onChange={(e, v) => { setFilter({ name: { from: 0, to: 2999 }, value: v }); }}
          checked={!!filter.find(el => el.from === 0)}
          component={Checkbox} >
          до 3&thinsp;000&thinsp;&#8381;
        </Field>
      </div>
      <div className='form__item'>
        <Field
          className='form__field'
          name='from3to6'
          onChange={(e, v) => { setFilter({ name: { from: 3000, to: 5999 }, value: v }); }}
          checked={!!filter.find(el => el.from === 3000)}
          component={Checkbox} >
          от 3&thinsp;000&thinsp;&#8381; до 6&thinsp;000&thinsp;&#8381;
        </Field>
      </div>
      <div className='form__item'>
        <Field
          className='form__field'
          name='from6to15'
          onChange={(e, v) => { setFilter({ name: { from: 6000, to: 14999 }, value: v }); }}
          checked={!!filter.find(el => el.from === 6000)}
          component={Checkbox} >
          от 6&thinsp;000&thinsp;&#8381; до 15&thinsp;000&thinsp;&#8381;
        </Field>
      </div>
      <div className='form__item'>
        <Field
          className='form__field'
          name='from15'
          onChange={(e, v) => { setFilter({ name: { from: 15000 }, value: v }); }}
          checked={!!filter.find(el => el.from === 15000)}
          component={Checkbox} >
          от 15&thinsp;000&thinsp;&#8381;
        </Field>
      </div>
    </form>
  </div>;

PriceFilter.propTypes = {
  className: PropTypes.string,
  setFilter: PropTypes.func.isRequired,
  filter: PropTypes.array,
};

export default PriceFilter;
