import { combineReducers } from "redux";
import * as actionTypes from "./contacts-actionTypes";

const initialContactsState = [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];       
    

const itemsReducer = (state = initialContactsState, { type, payload }) => {
    switch (type) {
        case actionTypes.ADD_CONTACT:
            return [...state, payload];            
        
        case actionTypes.DELETE_CONTACT:
            return state.filter(contact => contact.id !== payload);            
    
        default:
            return state;
            
    }
};

const filterReducer = (state = '', { type, payload }) => {
    switch (type) {
        case actionTypes.FILTER_CONTACTS:
            return state = payload;            
    
        default:
            return state;
    }
};

export default combineReducers({
    items: itemsReducer,
    filter: filterReducer,
})