import * as actions from '../constants/contact';
import {hashHistory} from 'react-router';

const getState = () => {
	console.log('here');
	let baseState = localStorage.getItem('contactApp');
	if (baseState != null) {
		return JSON.parse(baseState);
	} else {
		localStorage.setItem('contactApp', JSON.stringify(initialState));
		return initialState;
	}
};


const initialState = {
	contacts: [
		{
			id: 1,
			nom: 'Toto',
			prenom: 'Tata',
			img: ''
		}, {
			id: 2,
			nom: 'Tati',
			prenom: 'Tato',
			img: ''
		}, {
			id: 3,
			nom: 'Tetu',
			prenom: 'Tute',
			img: ''
		}
	]
};


/**
 *
 * @param state
 * @param action
 */
export const contact = (state = getState(), action) => {
	switch (action.type) {
		case actions.ADD_CONTACT:
			state.contacts.push(action.param);
			localStorage.setItem('contactApp', JSON.stringify(state));
			hashHistory.push('/list');
			return state;
			break;
		case actions.REMOVE_CONTACT:
			let contact = state.contacts.indexOf(action.param);
			if (contact != 'undefined') {
				state.contacts.splice(contact, 1);
				localStorage.setItem('contactApp', JSON.stringify(state));
			}
			return state;
			break;
		default:
			return state;
			break;
	}
};