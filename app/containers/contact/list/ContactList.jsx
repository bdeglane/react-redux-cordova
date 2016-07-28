import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Icon } from 'react-fa';

import './contactList.scss';

export default class ContactList extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		let items = this.props.contacts.map((item, id)=> {
			return (
				<li key={id} className="grid-block vertical shrink card small">
					<Link to="/" className="card-divider grid-block">
						<div className="grid-block">
							{item.prenom + ' ' + item.nom}
						</div>
						<div className="grid-block shrink">
							<Icon name="caret-right"/>
						</div>
					</Link>
					<div className="card-section">
					</div>
				</li>
			);
		});

		return (<div className="grid-block">
			<ul className="grid-block vertical contact-list">
				{items}
			</ul>
		</div>);
	}
}

ContactList.propTypes = {
	contacts: PropTypes.array.isRequired
};

const mapStateToProps = (state) => {
	return {
		contacts: state.contact.contacts
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		removeContact: (param)=> {
			dispatch({type: 'REMOVE_CONTACT', param: param});
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);