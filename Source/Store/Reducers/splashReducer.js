import {act} from 'react-test-renderer';
import ActionType from '../Actions/ActionType';
import {AllAction} from '../Actions/AllActions';
const initialState = {
  success: '',
  splashData: {},
  message: '',
  loading: false,
  error: null,
};
export const splashReducer = (state = initialState, action) => {
  switch (action.type) {
    case AllAction.SPLASH_DATA:
      return {
        ...state,
        splashData: action.payload,
      };
    case AllAction.SPLASH_DATA_SUUCESS:
      return {
        ...state,
        splashSuccess: action.payload,
      };
    default:
      return state;
  }
};
