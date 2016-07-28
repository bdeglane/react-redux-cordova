import React from 'react';
import { Router, Route, browserHistory, hashHistory } from 'react-router';

import Layout from './containers/layout/Layout.jsx';
import Contact from './containers/contact/Contact.jsx';
import ContactList from './containers/contact/list/ContactList.jsx';
import ContactAdd from './containers/contact/add/ContactAdd.jsx';
import ContactSingle from './containers/contact/single/ContactSingle.jsx';

export default class ContactRouter extends React.Component {
	constructor() {
		super();
	}

	render() {
		return (
			<Router history={hashHistory}>
				<Route component={Layout}>
					<Route path="/" component={Contact}>
						<Route path="/list" component={ContactList}/>
						<Route path="/add" component={ContactAdd}/>
						<Route path="/single/:id" component={ContactSingle}/>
					</Route>
				</Route>
			</Router>
		)
	}
}