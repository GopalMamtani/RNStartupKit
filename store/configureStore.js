import { applyMiddleware,createStore, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import ageReducer from '../js/Module1/ModuleOneReducer';
import userReducer from '../js/UserModule/UserReducer';

const rootReducer = combineReducers(
{ main: ageReducer,user: userReducer }
);

const middlewares= [thunk];

const configureStore = () => {
return createStore(rootReducer,applyMiddleware(...middlewares));
}

export default configureStore;