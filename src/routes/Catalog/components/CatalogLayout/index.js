import React from 'react';

import FilterControlList from '../../containers/FilterControlList';
import FilterList from '../../containers/FilterList';
import ProductList from '../../containers/ProductList';
import './styles.sass';


export const CatalogLayout = () =>
  <div className='catalog-layout'>
    <FilterControlList className='catalog-layout__filter-controls' />
    <FilterList className='catalog-layout__filters' />
    <ProductList className='catalog-layout__products' />
  </div>;

export default CatalogLayout;
