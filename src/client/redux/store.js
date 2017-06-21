import { compose, applyMiddleware, createStore,combineReducers } from 'redux';
import rooReducer from './reducers';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';



let finalCreateStore = compose(
    applyMiddleware(thunk, createLogger())
)(createStore)


export default function configureStore(initialState = { stores: [], brands: [] }) {
    return finalCreateStore(rooReducer, initialState)
}