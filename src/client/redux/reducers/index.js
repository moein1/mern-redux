import { combineReducers } from 'redux';
import brandReducer from './brandReducer';
import storeReducer from './storeReducer';
import {routerReducer} from 'react-router-redux'

const rootReducer = combineReducers({
    stores: storeReducer,
    brands: brandReducer,
    routing:routerReducer
})

export default rootReducer;