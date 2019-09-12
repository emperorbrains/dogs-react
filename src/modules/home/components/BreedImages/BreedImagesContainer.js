import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import BreedImages from './BreedImages';
import RequestStates from '../../../../utils/request-states';

const BreedImagesContainer = ({
  loading, breedImages,
}) => (
  <BreedImages
    loading={loading}
    breedImages={breedImages}
  />
);

BreedImagesContainer.propTypes = {
  loading: PropTypes.bool,
  breedImages: PropTypes.instanceOf(Array),
};

BreedImagesContainer.defaultProps = {
  loading: false,
  breedImages: [],
};

const mapStateToProps = (state) => ({
  loading: state.home.getBreedImagesRequestState === RequestStates.loading,
  breedImages: state.home.breedImages,
});

export default connect(mapStateToProps)(BreedImagesContainer);
