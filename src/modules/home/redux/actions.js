import * as actionTypes from './actionTypes';

export const getBreeds = () => ({
  type: actionTypes.GET_BREEDS,
  // payload: api.get('/breeds'),
});

export const getBreedImages = () => ({
  type: actionTypes.GET_BREED_IMAGES,
  // payload: api.get('/'),
});
