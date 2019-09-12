import React from 'react';
// import PropTypes from 'prop-types';

import searchIcon from '../../../assets/icons/search.svg';
import Breeds from './Breeds/BreedsContainer';

const Home = () => (
  <div className="home">
    <div className="page-head">
      <h1>Dogs!</h1>
      <div className="search">
        <img src={searchIcon} alt="" />
        <input type="text" placeholder="search" />
      </div>
    </div>
    <Breeds />
  </div>
);

Home.propTypes = {
};

Home.defaultProps = {
};

export default Home;
