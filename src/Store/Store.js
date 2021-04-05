import {createStore} from 'redux';
import Reducer from './Reducer';

export const store = createStore(Reducer,window.__REDUX_DEVTOOLS_EXTENSIONS__ && window.__REDUX_DEVTOOLS_EXTENSIONS__());