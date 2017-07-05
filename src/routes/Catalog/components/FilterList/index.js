import React from 'react';
import PropTypes from 'prop-types';

import './styles.sass';


export const FilterList = ({
  className, filters, setSizeFilter, setCountryFilter, setMaterialFilter, setPriceFilter, clearFilters,
}) =>
  <div className={`filter-list ${ className || '' }`}>
    { (filters.size.wFrom || filters.size.wTo) && <div className='filter-list__item'>
      <div className='filter-list__item-text'>
        { (filters.size.wFrom || filters.size.wTo) && 'Ширина: ' }
        { filters.size.wFrom && `от ${ filters.size.wFrom } см ` }
        { filters.size.wTo && `до ${ filters.size.wTo } см` }
      </div>
      <div className='filter-list__item-close' onClick={() => { setSizeFilter({ wFrom: '', wTo: '' }); }} />
    </div> }
    { (filters.size.hFrom || filters.size.hTo) && <div className='filter-list__item'>
      <div className='filter-list__item-text'>
        { (filters.size.hFrom || filters.size.hTo) && 'Длина: ' }
        { filters.size.hFrom && `от ${ filters.size.hFrom } см ` }
        { filters.size.hTo && `до ${ filters.size.hTo } см` }
      </div>
      <div className='filter-list__item-close' onClick={() => { setSizeFilter({ hFrom: '', hTo: '' }); }} />
    </div> }
    { filters.country.length > 0 && filters.country.map((filter, i) => <div key={i} className='filter-list__item'>
      <div className='filter-list__item-text'>
        { filter }
      </div>
      <div className='filter-list__item-close' onClick={() => { setCountryFilter({ name: filter, value: false }); }} />
    </div> )}
    { filters.material.length > 0 && filters.material.map((filter, i) => <div key={i} className='filter-list__item'>
      <div className='filter-list__item-text'>
        { filter }
      </div>
      <div className='filter-list__item-close' onClick={() => { setMaterialFilter({ name: filter, value: false }); }} />
    </div> )}
    { filters.price.length > 0 && filters.price.map((filter, i) => <div key={i} className='filter-list__item'>
      <div className='filter-list__item-text'>
        цена от { filter.from }&thinsp;&#8381; { filter.to && `до ${ filter.to }` }&thinsp;&#8381;
      </div>
      <div className='filter-list__item-close' onClick={() => {
        setPriceFilter({ name: { from: filter.from, to: filter.to }, value: false });
      }} />
    </div> )}
    { ((filters.size.wFrom || filters.size.wTo) ||
    (filters.size.hFrom || filters.size.hTo) ||
    filters.country.length > 0 ||
    filters.material.length > 0 ||
    filters.price.length > 0) && <div onClick={clearFilters}className='filter-list__clear'>Отменить все фильтры</div>}
  </div>;

FilterList.propTypes = {
  className: PropTypes.string,
  filters: PropTypes.object,
  setSizeFilter: PropTypes.func,
  setCountryFilter: PropTypes.func,
  setMaterialFilter: PropTypes.func,
  setPriceFilter: PropTypes.func,
  clearFilters: PropTypes.func,
};

export default FilterList;
