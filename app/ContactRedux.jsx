import React from 'react';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import contactApp from './reducers/index';
import ContactRouter from './ContactRouter.jsx';

export default class ContactRedux extends React.Component {
	constructor() {
		super();
		this.store = createStore(
			contactApp,
			applyMiddleware(thunk)
		);
	}

	render() {
		return (<Provider store={this.store}>
			<ContactRouter/>
		</Provider>)
	}
}