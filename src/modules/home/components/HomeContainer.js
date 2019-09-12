import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Home from './Home';
import { displayErrors } from '../../../utils';
import { usePrevious } from '../../../utils/hooks';
import RequestStates from '../../../utils/request-states';

const HomeContainer = ({
  hasError, errorMessages,
}) => {
  const prevErrorMessages = usePrevious(errorMessages);

  useEffect(() => {
    if (hasError) {
      displayErrors(prevErrorMessages, errorMessages);
    }
  }, [hasError, errorMessages]);

  return (
    <Home />
  );
};

HomeContainer.propTypes = {
  hasError: PropTypes.bool,
  errorMessages: PropTypes.instanceOf(Array),
};

HomeContainer.defaultProps = {
  hasError: false,
  errorMessages: [],
};

const mapStateToProps = state => ({ // eslint-disable-line
  hasError: (
    state.home.getBreedsRequestState === RequestStates.error
    || state.home.getBreedImagesRequestState === RequestStates.error
  ),
  errorMessages: [
    state.home.getBreedsError,
    state.home.getBreedImagesError,
  ],
});

export default connect(mapStateToProps)(HomeContainer);
