import React from 'react';
import PropTypes from 'prop-types';

import { ButtonWithDropdown } from 'controls/ButtonWithDropdown';
import SizeFilter from '../../containers/SizeFilter';
import CountryFilter from '../../containers/CountryFilter';
import MaterialFilter from '../../containers/MaterialFilter';
import PriceFilter from '../../containers/PriceFilter';

import './styles.sass';


export const FilterControlList = ({
  className,
  filters,
  setSizeFilterDropdown,
  setCountryFilterDropdown,
  setMaterialFilterDropdown,
  setPriceFilterDropdown,
}) =>
  <div className={`filter-controls-list ${ className } || ''`}>
    <ButtonWithDropdown
      className='filter-controls-list__item'
      text='Размер'
      setDropdown={setSizeFilterDropdown}
      isDropdown={filters.isSizeFilterDropdown}>
      <SizeFilter />
    </ButtonWithDropdown>
    <ButtonWithDropdown
      className='filter-controls-list__item'
      text='Страна'
      setDropdown={setCountryFilterDropdown}
      isDropdown={filters.isCountryFilterDropdown}>
      <CountryFilter />
    </ButtonWithDropdown>
    <ButtonWithDropdown
      className='filter-controls-list__item'
      text='Материал'
      setDropdown={setMaterialFilterDropdown}
      isDropdown={filters.isMaterialFilterDropdown}>
      <MaterialFilter />
    </ButtonWithDropdown>
    <ButtonWithDropdown
      className='filter-controls-list__item'
      text='Цена'
      setDropdown={setPriceFilterDropdown}
      isDropdown={filters.isPriceFilterDropdown}>
      <PriceFilter />
    </ButtonWithDropdown>
  </div>;

FilterControlList.propTypes = {
  className: PropTypes.string,
  filters: PropTypes.object,
  setSizeFilterDropdown: PropTypes.func,
  setCountryFilterDropdown: PropTypes.func,
  setMaterialFilterDropdown: PropTypes.func,
  setPriceFilterDropdown: PropTypes.func,
};

export default FilterControlList;
