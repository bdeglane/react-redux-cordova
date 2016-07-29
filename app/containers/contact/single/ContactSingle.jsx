import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Icon } from 'react-fa';

export default class ContactSingle extends React.Component {
	constructor(props) {
		super(props);
		console.log(props);
	}

	removeContact(e, id) {
		e.preventDefault();
		this.props.removeContact(id);
	}

	render() {
		let contact = JSON.parse(this.props.location.query.contact);
		return (<div className="grid-block vertical">
			<div className="grid-content shrink">
				<h1>{contact.prenom} {contact.nom}</h1>
			</div>
			<div className="grid-content shrink">
				<Icon name="phone"/> {contact.tel}
			</div>
			<div className="grid-content shrink">
				<Icon name="envelope-o"/> {contact.email}
			</div>
			<div className="grid-content shrink">
				<a href="#" onClick={(e)=> this.removeContact(e,contact.id)}>
					<Icon name="remove"/> Remove
				</a>
			</div>
			<div className="grid-content shrink">
				<img src={contact.img} alt=""/>
			</div>
		</div>)
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		removeContact: (param)=> {
			dispatch({type: 'REMOVE_CONTACT', param: param});
		}
	};
};

export default connect(null, mapDispatchToProps)(ContactSingle);