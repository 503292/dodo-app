import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk';
import { persistStore } from 'redux-persist';

import taskReducer from './storeChanges/tasks/tasksReducers';
import globalReducer from './storeChanges/global/globalReducers';

const rootReducer = combineReducers({
  global: globalReducer,
  tasks: taskReducer,
});

const enhancer = applyMiddleware(ReduxThunk);

export const store = createStore(rootReducer, composeWithDevTools(enhancer));

export const persistor = persistStore(store);
