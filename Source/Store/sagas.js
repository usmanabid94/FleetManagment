import {put, takeLatest, call} from 'redux-saga/effects';
import {AllAction} from './Actions/AllActions';
import {getSettings} from './Requests/getSettings';

function* getSettingsInfo() {
  const getSettingsData = yield call(getSettings);
  yield put({type: AllAction.SPLASH_DATA_SUUCESS, payload: getSettingsData});
}

export function* RestSaga() {
  yield takeLatest(AllAction.SPLASH_DATA, getSettingsInfo);
}
