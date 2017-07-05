import React from 'react';
import PropTypes from 'prop-types';

import './styles.sass';


export const Layout = ({ children }) => (
  <div className='layout'>
    <div className='layout__header' />
    <div className='layout__content'>
      <div className='layout__content-inner'>
        {children}
        <div className='layout__footer' />
      </div>
    </div>
  </div>
);

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
