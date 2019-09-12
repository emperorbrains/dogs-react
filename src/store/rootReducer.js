import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import { reducer as homeReducer } from '../modules/home';

const rootReducer = combineReducers({
  form: formReducer,
  home: homeReducer,
});

export default rootReducer;
