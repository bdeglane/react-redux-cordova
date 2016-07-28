import {combineReducers} from 'redux';
import {contact} from './contact';

/**
 * Combine all the reducers in a constant and export it.
 * This constant will be given to the redux store
 */
const contactApp = combineReducers({
	contact
});

export default contactApp;