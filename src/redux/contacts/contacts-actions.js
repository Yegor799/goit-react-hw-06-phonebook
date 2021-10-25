import * as contactsTypes from './contacts-actionTypes';

export const addContact = contact => ({
    type: contactsTypes.ADD_CONTACT,
    payload: contact,
});

export const deleteContact = contactId => ({
    type: contactsTypes.DELETE_CONTACT,
    payload: contactId,
});

export const filterContacts = value => ({
    type: contactsTypes.FILTER_CONTACTS,
    payload: value,
})