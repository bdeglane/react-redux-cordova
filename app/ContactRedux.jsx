import React from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

import contactApp from './reducers/index';
import ContactRouter from './ContactRouter.jsx';

export default class ContactRedux extends React.Component {
	constructor() {
		super();
		this.store = createStore(contactApp);
	}

	render() {
		return (<Provider store={this.store}>
			<ContactRouter/>
		</Provider>)
	}
}