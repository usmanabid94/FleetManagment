/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import { NavigationActions, } from '@react-navigation/native';
import { CommonActions } from '@react-navigation/native';

let _navigator;


class NavigationService {
    constructor() {
        // let _navigator;
        this._navigator

    }


    setTopLevelNavigator = (navigatorRef) => {
        _navigator = navigatorRef;
    }

    navigate = (routeName, params) => {
        _navigator.dispatch(
            // NavigationActions.navigate({
            //     routeName,

            // })
            CommonActions.navigate({
                name: routeName,
                params:params
            })
        );
    }


}
export default new NavigationService()

