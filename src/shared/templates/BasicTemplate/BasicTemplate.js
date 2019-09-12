import React from 'react';
import PropTypes from 'prop-types';

const BasicTemplate = ({ children }) => (
  <div className="page">
    <div className="widget">
      <div className="children">
        {children}
      </div>
    </div>
  </div>
);

BasicTemplate.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)]),
};

BasicTemplate.defaultProps = {
  children: <div />,
};

export default BasicTemplate;
