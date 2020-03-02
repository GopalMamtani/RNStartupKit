import { createStore, combineReducers } from 'redux';
import ageReducer from '../js/Module1/ModuleOneReducer';

const rootReducer = combineReducers(
{ age: ageReducer }
);

const configureStore = () => {
return createStore(rootReducer);
}

export default configureStore;