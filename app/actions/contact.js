import * as contactActions from '../constants/contact';
/**
 *
 * @param contact
 * @returns {{type: *, text: string, contact: *}}
 */
export const addContact = (contact) => {
	return {
		type: contactActions.USERNAME,
		text: 'add a contact',
		contact
	}
};
/**
 *
 * @param contact
 * @returns {{type: *, text: string, contact: *}}
 */
export const removeContact = (contact) => {
	return {
		type: contactActions.USERNAME,
		text: 'remove a contact',
		contact
	}
};