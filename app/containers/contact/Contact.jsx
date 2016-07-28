import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

export default class Contact extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (<div className="grid-block">
			{this.props.children}
		</div>);
	}
}

