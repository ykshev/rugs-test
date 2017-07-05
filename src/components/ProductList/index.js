import React from 'react';
import PropTypes from 'prop-types';

import './styles.sass';


export class ProductList extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      hover: false,
    };
  }
  static propTypes = {
    className: PropTypes.string,
    products: PropTypes.array,
  }

  render() {
    const { className, products } = this.props;
    const { hover } = this.state;
    return (<div className={`product-list ${ className } || ''`}>
      <div className='product-list__inner'>
        { products.map(product => <div
          key={product._id}
          className={`product-list__item ${ hover === product._id ? '_hover' : '' }`}
          onMouseOver={() => { this.setState({hover: product._id}); }}
          onMouseLeave={() => { this.setState({hover: false}); }}>
          <div
            className='product-list__img'
            style={{
              backgroundImage: hover === product._id && product.photo[1] ?
                `url(${ product.photo[1] })` :
                `url(${ product.photo[0] })` }} />
          <div className='product-list__price'>
            <span>от</span> {product.size[0].price}<span> до </span>{product.size[product.size.length - 1].price}<span> руб.</span>
          </div>
          <div className='product-list__characteristics'>
            {product.material && `${ product.material }, `}{product.country && `${ product.country }`}
          </div>
          <div className='product-list__sizes'>
            <div className='product-list__sizes-title'>
              Размеры:
            </div>
            { product.size.map(size => <div className='product-list__sizes-item' key={size.price}>
              {size.w}x{size.h}
            </div> )}
          </div>
        </div> )}
      </div>
    </div>);
  }
}

export default ProductList;
