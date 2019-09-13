import React, { useState } from 'react';
// import PropTypes from 'prop-types';

import searchIcon from '../../../assets/icons/search.svg';
import Breeds from './Breeds/BreedsContainer';
import BreedImages from './BreedImages/BreedImagesContainer';

const Home = () => {
  const [searchText, setSearchText] = useState('');
  return (
    <div className="home">
      <div className="page-head">
        <h1>Dogs!</h1>
        <div className="search">
          <img src={searchIcon} alt="" />
          <input type="text" placeholder="search" value={searchText} onChange={(e) => setSearchText(e.target.value)} />
        </div>
      </div>
      <Breeds search={searchText ? searchText.toLowerCase() : ''} />
      <BreedImages />
    </div>
  );
};

Home.propTypes = {
};

Home.defaultProps = {
};

export default Home;
