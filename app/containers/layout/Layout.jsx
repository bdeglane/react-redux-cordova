import React from 'react';
import Header from '../../components/header/Header';

export default class Layout extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="grid-frame">
				<div className="grid-block vertical">
					<div className="grid-block shrink">
						<Header title="Contact"/>
					</div>
					<div className="grid-block">
						{this.props.children}
					</div>
				</div>
			</div>
		)
	}
}