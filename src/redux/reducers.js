import { combineReducers } from 'redux'
import combineStates from './combineStates'
import user from './user/Reducer'
import findMusic from './findMusic/Reducer'

const reducers = {
  user,
  findMusic
}
Object.keys(reducers).forEach(key => (reducers[key] = combineStates(reducers[key])))

export default combineReducers(reducers)
