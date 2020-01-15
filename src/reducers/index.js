import { combineReducers } from 'redux'
import counterReducer from './counter'
import rotateReducer from './rotateReducer'

export default combineReducers({
    counter: counterReducer,
    rotateReducer: rotateReducer
})