// import { v4 as uuidv4 } from 'uuid';
import './App.css';
import ContactForm from './components/ContactForm/ContactForm';
import Filter from './components/Filter/Filter';
import ContactList from './components/ContactList/ContactList';
import { connect } from 'react-redux';
import * as contactsActions from './redux/contacts/contacts-actions';


function App({ contacts, filter, addContact, deleteContact, filterContact }) {  
 
  
  return (
    <div className="Container">

      <ContactForm />

      <h2>Contacts</h2>

      <Filter />

      <ContactList />

    </div>
  );
}

const mapStateToProps = state => {

  const { filter, items } = state.contacts;
  const filteredNames = items.filter(item => item.name.toLowerCase().includes(filter.toLowerCase()));

  return {
    contacts: filteredNames,
    filter: state.contacts.filter,
  }
};

const mapDispatchToProps = dispatch => ({
  addContact: (name, number) => dispatch(contactsActions.addContact(name, number)),
  deleteContact: contactId => dispatch(contactsActions.deleteContact(contactId)),  
});

export default connect(mapStateToProps,mapDispatchToProps)(App);
