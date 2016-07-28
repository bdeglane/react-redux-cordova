import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import './contactAdd.scss';

export default class ContactAdd extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			nom: '',
			prenom: '',
			email: '',
			tel: '',
			id: Date.now(),
			img: ''
		}
	}

	/**
	 *
	 * @param e
	 * @param value
	 */
	onHandleChange(e, value) {
		switch (value) {
			case 'nom':
				this.setState({nom: e.target.value});
				break;
			case 'prenom':
				this.setState({prenom: e.target.value});
				break;
			case 'email':
				this.setState({email: e.target.value});
				break;
			case 'tel':
				this.setState({tel: e.target.value});
				break;
			default:
				break;
		}
	}

	/**
	 *
	 * @param e
	 */
	validate(e) {
		e.preventDefault();
		this.props.addContact(this.state)
	}

	render() {
		return (<div className="grid-block">
			<div className="grid-block vertical">
				<div className="grid-content shrink">
				</div>
				<div className="grid-content">
					<form action="#" className="grid-block vertical" id="add-contact">
						<div className="grid-content">
							<label className="form-label" htmlFor="nom">Nom</label>
							<input type="text" id="nom"
								   value={this.state.nom}
								   onChange={(e)=>this.onHandleChange(e,'nom')}/>
						</div>
						<div className="grid-content">
							<label className="form-label" htmlFor="prenom">Prenom</label>
							<input type="text" id="prenom"
								   value={this.state.prenom}
								   onChange={(e)=>this.onHandleChange(e,'prenom')}/>
						</div>
						<div className="grid-content">
							<label className="form-label" htmlFor="email">Email</label>
							<input type="email" id="email"
								   value={this.state.email}
								   onChange={(e)=>this.onHandleChange(e,'email')}/>
						</div>
						<div className="grid-content">
							<label className="form-label" htmlFor="tel">Tel</label>
							<input type="tel" id="tel"
								   value={this.state.tel}
								   onChange={(e)=>this.onHandleChange(e,'tel')}/>
						</div>
						<div className="grid-content">
							<input type="submit" onClick={(e)=> this.validate(e)}/>
						</div>
					</form>
				</div>
			</div>
		</div>);
	}
}

ContactAdd.propTypes = {
	addContact: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
	return {}
};

const mapDispatchToProps = (dispatch) => {
	return {
		addContact: (param)=> {
			dispatch({type: 'ADD_CONTACT', param: param});
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactAdd);