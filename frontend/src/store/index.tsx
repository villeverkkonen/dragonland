import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import heroReducer from './hero/reducer'
import equipmentReducer from './equipment/reducer'
import battlefieldReducer from './battlefield/reducer'

const rootReducer = combineReducers({
  heroReducer: heroReducer,
  equipmentReducer: equipmentReducer,
  battlefieldReducer: battlefieldReducer,
})

export type AppState = ReturnType<typeof rootReducer>

export default function configureStore() {
  const store = createStore(rootReducer, applyMiddleware(thunk))

  return store
}
