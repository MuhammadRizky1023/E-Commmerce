import { combineReducers, createStore, compose, applyMiddleware } from 'redux'
import { productReducer } from './reducers/productReducer'
import thunk from 'redux-thunk'

const rootReducers = combineReducers({productReducer})



const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENTION_COMPOSE__ || compose;

const store = createStore(rootReducers, composeEnhancers(applyMiddleware(thunk)))

export { store }