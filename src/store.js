import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import rootReducer from './reducers';

const composeEnhancers = composeWithDevTools(applyMiddleware(thunk, logger));
export default createStore(rootReducer, composeEnhancers);
