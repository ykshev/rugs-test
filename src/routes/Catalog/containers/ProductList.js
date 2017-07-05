import { connect } from 'react-redux';
import { sortedIndexBy } from 'lodash/array';
import { ProductList } from 'components/ProductList';

const mapStateToProps = (state) => {
  const sizeFilter = state.catalogRoute.filters.size;
  const countryFilter = state.catalogRoute.filters.country;
  const materialFilter = state.catalogRoute.filters.material;
  const priceFilter = state.catalogRoute.filters.price;
  const products = state.products.items.filter((product) => {
    if(sizeFilter) {
      const size = product.size.find((el) => {
        const isWFrom = sizeFilter.wFrom ? +el.w > +sizeFilter.wFrom : true;
        const isWTo = sizeFilter.wTo ? +el.w < +sizeFilter.wTo : true;
        const isHFrom = sizeFilter.hFrom ? +el.h > +sizeFilter.hFrom : true;
        const isHTo = sizeFilter.hTo ? +el.h < +sizeFilter.hTo : true;
        if(isWFrom && isWTo && isHFrom && isHTo) return true;
        return false;
      });
      if(!size) return false;
    }
    if(materialFilter.length > 0 && !materialFilter.find(el => el === product.material)) return false;
    if(countryFilter.length > 0 && !countryFilter.find(el => el === product.country)) return false;
    if(priceFilter.length > 0) {
      const size = product.size.find((el) => {
        const i = sortedIndexBy(priceFilter, { from: el.price }, 'from');
        if(priceFilter[i] && +priceFilter[i].from === +el.price) {
          return true;
        }
        if(!i) {
          return false;
        }
        if(+priceFilter[i - 1].to) {
          return el.price < +priceFilter[i - 1].to;
        }
        return true;
      });
      if(!size) return false;
    }
    return true;
  });
  return {
    products,
  };
};

export default connect(mapStateToProps)(ProductList);
