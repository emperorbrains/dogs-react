import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Breeds from './Breeds';
import * as actions from '../../redux/actions';
import RequestStates from '../../../../utils/request-states';
import { noop } from '../../../../utils';

const BreedsContainer = ({ getBreeds, loading, breeds }) => {
  const [selectedBreed, setSelectedBreed] = useState('');

  useEffect(() => {
    getBreeds();
  }, []);

  const handleBreedClick = (breed) => {
    setSelectedBreed(breed);
  };

  return (
    <Breeds
      loading={loading}
      breeds={breeds}
      selectedBreed={selectedBreed}
      handleBreedClick={handleBreedClick}
    />
  );
};

BreedsContainer.propTypes = {
  getBreeds: PropTypes.func,
  loading: PropTypes.bool,
  breeds: PropTypes.instanceOf(Array),
};

BreedsContainer.defaultProps = {
  getBreeds: noop,
  loading: false,
  breeds: [],
};

const mapStateToProps = (state) => ({
  loading: state.home.getBreedsRequestState === RequestStates.loading,
  breeds: state.home.breeds,
});

const mapDispatchToProps = (dispatch) => ({
  getBreeds: () => dispatch(actions.getBreeds()),
});

export default connect(mapStateToProps, mapDispatchToProps)(BreedsContainer);
