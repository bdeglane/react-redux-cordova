import React from 'react';
import ReactDom from 'react-dom';
import ContactRedux from './ContactRedux.jsx';

export default class Contact {
	start() {
		ReactDom.render(<ContactRedux/>, document.getElementById('app'));
	}
}