import * as actionTypes from './actionTypes';
import RequestStates from '../../../utils/request-states';

const INITIAL_STATE = {
  breeds: [],
  getBreedsRequestState: RequestStates.init,
  getBreedsError: null,
  breedImages: [],
  getBreedImagesRequestState: RequestStates.init,
  getBreedImagesError: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.GET_BREEDS_LOADING:
      return {
        ...state,
        getBreedsRequestState: RequestStates.loading,
        getBreedsError: null,
      };
    case actionTypes.GET_BREEDS_SUCCESS:
      return {
        ...state,
        breeds: action.payload && action.payload.data
          && action.payload.data.message
          && Object.keys(action.payload.data.message),
        getBreedsRequestState: RequestStates.success,
        getBreedsError: null,
      };
    case actionTypes.GET_BREEDS_ERROR:
      return {
        ...state,
        getBreedsRequestState: RequestStates.error,
        getBreedsError: action.payload.error,
      };
    case actionTypes.GET_BREED_IMAGES_LOADING:
      return {
        ...state,
        getBreedImagesRequestState: RequestStates.loading,
        getBreedImagesError: null,
      };
    case actionTypes.GET_BREED_IMAGES_SUCCESS:
      return {
        ...state,
        breedImages: action.payload.data.message,
        getBreedImagesRequestState: RequestStates.success,
        getBreedImagesError: null,
      };
    case actionTypes.GET_BREED_IMAGES_ERROR:
      return {
        ...state,
        getBreedImagesRequestState: RequestStates.error,
        getBreedImagesError: action.payload.error,
      };
    default:
      return state;
  }
};
