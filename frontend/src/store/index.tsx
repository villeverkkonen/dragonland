import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import heroReducer from './hero/reducer';
import equipmentReducer from './equipment/reducer';

const rootReducer = combineReducers({
  heroReducer: heroReducer,
  equipmentReducer: equipmentReducer
});

export type AppState = ReturnType<typeof rootReducer>;

export default function configureStore() {
  const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
  );

  return store;
};