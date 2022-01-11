import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import taskReducer from './tasks/tasksReducers';
import globalReducer from './global/globalReducers';
import currencyReducer from './currency/currencyReducers';
import locationReducer from './location/locationReducers';

const persistConfigGlobal = {
  key: 'global',
  storage,
};

const rootReducer = combineReducers({
  global: persistReducer(persistConfigGlobal, globalReducer),
  tasks: taskReducer,
  currencyMark: currencyReducer,
  location: locationReducer,
});

const enhancer = applyMiddleware(ReduxThunk);

export const store = createStore(rootReducer, composeWithDevTools(enhancer));

export const persistor = persistStore(store);
