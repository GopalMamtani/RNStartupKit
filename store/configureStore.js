import { createStore, combineReducers } from 'redux';
import ageReducer from '../store/reducer';

const rootReducer = combineReducers(
{ age: ageReducer }
);

const configureStore = () => {
return createStore(rootReducer);
}

export default configureStore;