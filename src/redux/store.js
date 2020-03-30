import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk';
import { persistStore } from 'redux-persist';

import taskReducer from './tasks/tasksReducers';
import globalReducer from './global/globalReducers';
import currencyReducer from './currency/currencyReducers';
import locationReducer from './location/locationReducers';

const rootReducer = combineReducers({
  global: globalReducer,
  tasks: taskReducer,
  currencyMark: currencyReducer,
  location: locationReducer,
});

const enhancer = applyMiddleware(ReduxThunk);

export const store = createStore(rootReducer, composeWithDevTools(enhancer));

export const persistor = persistStore(store);
