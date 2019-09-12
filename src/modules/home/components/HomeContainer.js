import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Home from './Home';
// import * as actions from '../redux/actions';
import { displayErrors } from '../../../utils';
import { usePrevious } from '../../../utils/hooks';
// import RequestStates from '../../../utils/request-states';

const HomeContainer = ({
  loading, hasError, errorMessages,
}) => {
  const prevErrorMessages = usePrevious(errorMessages);

  useEffect(() => {
    // getAllBreeds();
  }, []);

  useEffect(() => {
    if (hasError) {
      displayErrors(prevErrorMessages, errorMessages);
    }
  }, [hasError, errorMessages]);

  return (
    <Home
      loading={loading}
    />
  );
};

HomeContainer.propTypes = {
  loading: PropTypes.bool,
  hasError: PropTypes.bool,
  errorMessages: PropTypes.instanceOf(Array),
};

HomeContainer.defaultProps = {
  loading: false,
  hasError: false,
  errorMessages: [],
};

const mapStateToProps = state => ({ // eslint-disable-line
  // loading: state.home.getBreedsRequestState === RequestStates.loading,
  // hasError: state.home.getBreedImagesRequestState === RequestStates.error,
  // errorMessages: [
  //   state.home.getBreeds,
  // ],
});

const mapDispatchToProps = dispatch => ({// eslint-disable-line
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
