import React from 'react';
import PropTypes from 'prop-types';
import BlockUI from 'react-block-ui';

import GoogleLoader from '../../../shared/components/GoogleLoader';
import { noop } from '../../../utils';

const Home = ({ onSelectedBreedChange, loading }) => (
  <div className="home">
    <div className="page-head">
      <h1>Dogs!</h1>
      <input className="search" />
    </div>
    {console.log(onSelectedBreedChange)}
    <BlockUI
      tag="div"
      blocking={loading}
      loader={<GoogleLoader height={50} width={50} />}
    >
      Dogs
    </BlockUI>
  </div>
);

Home.propTypes = {
  onSelectedBreedChange: PropTypes.func,
  loading: PropTypes.bool,
};

Home.defaultProps = {
  onSelectedBreedChange: noop,
  loading: false,
};

export default Home;
