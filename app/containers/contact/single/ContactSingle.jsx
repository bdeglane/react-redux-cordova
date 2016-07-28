import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

export default class ContactSingle extends React.Component {
	constructor(props) {
		super(props);
		console.log(props);
	}

	removeContact(e, contact) {
		e.preventDefault();
		console.log(contact);
		//this.props.removeContact(contact);
	}

	render() {
		return (<div className="grid-block vertical">
			<div className="grid-content">
				<h1>{this.props.nom} {this.props.prenom}</h1>
			</div>
			<div className="grid-content">

			</div>
		</div>)
	}
}

ContactSingle.propTypes = {
	id: PropTypes.string,
	nom: PropTypes.string,
	prenom: PropTypes.string,
	email: PropTypes.string,
	tel: PropTypes.string,
	img: PropTypes.string
};

const mapStateToProps = (state) => {
	return {
		nom: state.contact.contacts
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		removeContact: (param)=> {
			dispatch({type: 'REMOVE_CONTACT', param: param});
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactSingle);

// onClick={(e,item)=> this.removeContact(e,item)}