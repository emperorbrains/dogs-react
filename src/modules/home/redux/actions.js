import * as actionTypes from './actionTypes';
import api from '../../../utils/api';

export const getBreeds = () => ({
  type: actionTypes.GET_BREEDS,
  payload: api.get('/breeds/list/all'),
});

export const getBreedImages = () => ({
  type: actionTypes.GET_BREED_IMAGES,
  // payload: api.get('/'),
});
