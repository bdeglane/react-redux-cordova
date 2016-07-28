import * as actions from '../constants/contact';
import {hashHistory} from 'react-router';

const initialState = {
	contacts: [
		{
			id: 1,
			nom: 'Toto',
			prenom: 'Tata'
		}, {
			id: 2,
			nom: 'Tati',
			prenom: 'Tato'
		}, {
			id: 3,
			nom: 'Tetu',
			prenom: 'Tute'
		}
	]
};

/**
 *
 * @param state
 * @param action
 */
export const contact = (state = initialState, action) => {
	switch (action.type) {
		case actions.ADD_CONTACT:
			state.contacts.push(action.param);
			hashHistory.push('/list');
			return state;
			break;
		case actions.REMOVE_CONTACT:
			let contact = state.contacts.indexOf(action.param);
			if (contact != 'undefined')
				state.contacts.splice(contact, 1);
			return state;
			break;
		default:
			return state;
			break;
	}
};