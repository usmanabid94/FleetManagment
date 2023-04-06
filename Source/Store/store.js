import {compose, createStore, applyMiddleware, combineReducers} from 'redux';
import {splashReducer} from './Reducers/splashReducer';
import createSagaMiddleware from 'redux-saga';
import {RestSaga} from './sagas';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AuthReducer} from './Reducers/AuthReducer/AuthReducer';
let composeEnhancers = compose;
const createDebugger = require('redux-flipper').default;

composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// let store = createStore(splashReducer)
const sagaMiddleware = createSagaMiddleware();
const middleWare = applyMiddleware(sagaMiddleware);
// mount it on the Store
//
const persistConfig = {
  key: 'root',
  storage: splashReducer,
  whitelist: ['splashReducer'], // only navigation will be persisted
};
const rootReducers = combineReducers({
  splashReducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducers);
AsyncStorage.getAllKeys((err, keys) => {
  AsyncStorage.multiGet(keys, (error, stores) => {
    stores.map((result, i, store) => {
      console.log('log async: ', {[store[i][0]]: store[i][1]});
      return true;
    });
  });
});

export const store = createStore(
  persistedReducer,
  composeEnhancers(middleWare),
);
// export const store = createStore(rootReducers, applyMiddleware(sagaMiddleware));

export const persistedStore = persistStore(store);
// then run the saga
sagaMiddleware.run(RestSaga);
