import {AllAction} from './AllActions';
export function getSettingsData(data) {
  return {
    type: AllAction.SPLASH_DATA,
    data: data,
  };
}
