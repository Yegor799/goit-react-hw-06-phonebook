import * as contactsTypes from './contacts-actionTypes';
import { v4 as uuidv4 } from 'uuid';

export const addContact = (name, number) => ({
    type: contactsTypes.ADD_CONTACT,
    payload: {
        id: uuidv4(),
        name,
        number,
    },
});

export const deleteContact = contactId => ({
    type: contactsTypes.DELETE_CONTACT,
    payload: contactId,
});

export const filterContacts = value => ({
    type: contactsTypes.FILTER_CONTACTS,
    payload: value,
});