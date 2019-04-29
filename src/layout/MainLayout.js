import React from 'react';
import PropTypes from 'prop-types';
import './MainLayout.css';

function MainLayout({children}) {
  return (
    <div className="grid">
      <div className="grid__row--full-width"></div>

      <div className="grid__row--left"></div>

      <div className="grid__row--center" >
        {children}
      </div>

      <div className="grid__row--right"></div>

      <div className="grid__row--full-width"></div>

    </div>
  );
}

MainLayout.propTypes = {
  children: PropTypes.node
}

export default MainLayout;
