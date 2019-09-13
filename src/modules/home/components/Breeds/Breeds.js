import React from 'react';
import PropTypes from 'prop-types';
import BlockUI from 'react-block-ui';

import { noop } from '../../../../utils';
import GoogleLoader from '../../../../shared/components/GoogleLoader';

const Breeds = ({
  loading, breeds, handleBreedClick, selectedBreed, search,
}) => (
  <BlockUI
    tag="div"
    blocking={loading}
    loader={<GoogleLoader height={50} width={50} />}
  >
    <div className="breeds">
      {
        breeds.map((breed) => (
          (!search || (search && search.length > 0 && breed.toLowerCase().includes(search)))
          && (
            <div
              className={`breed ${selectedBreed === breed ? 'active' : ''}`}
              role="presentation"
              onClick={() => handleBreedClick(breed)}
            >
              {breed}
            </div>
          )
        ))
      }
    </div>
  </BlockUI>
);

Breeds.propTypes = {
  loading: PropTypes.bool,
  breeds: PropTypes.instanceOf(Array),
  handleBreedClick: PropTypes.func,
  selectedBreed: PropTypes.string,
  // eslint-disable-next-line react/require-default-props
  search: PropTypes.string,
};

Breeds.defaultProps = {
  loading: false,
  breeds: [],
  handleBreedClick: noop,
  selectedBreed: '',
};

export default Breeds;
