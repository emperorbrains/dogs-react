import React from 'react';
import PropTypes from 'prop-types';
import BlockUI from 'react-block-ui';

import GoogleLoader from '../../../../shared/components/GoogleLoader';

const BreedImages = ({
  loading, breedImages,
}) => (
  <BlockUI
    tag="div"
    blocking={loading}
    loader={<GoogleLoader height={50} width={50} />}
  >
    <div className="breed-images">
      {
        breedImages.map((breedImage) => (
          <div className="breed-image">
            <img src={breedImage} alt="" />
          </div>
        ))
      }
    </div>
  </BlockUI>
);

BreedImages.propTypes = {
  loading: PropTypes.bool,
  breedImages: PropTypes.instanceOf(Array),
};

BreedImages.defaultProps = {
  loading: false,
  breedImages: [],
};

export default BreedImages;
