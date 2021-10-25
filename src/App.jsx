import { v4 as uuidv4 } from 'uuid';
import './App.css';
import ContactForm from './components/ContactForm/ContactForm';
import Filter from './components/Filter/Filter';
import ContactList from './components/ContactList/ContactList';
import { connect } from 'react-redux';
import * as contactsActions from './redux/contacts/contacts-actions';


function App({ contacts, filter, createContact, deleteContact, filterContact }) {
  
  const handleFilterChange = e => {
    filterContact(e.target.value)
  };

  const formSubmitHandler = (name, number) => {
    const duplicateName = contacts.find(contact => contact.name === name);
    duplicateName ? alert(`${name} is already in contacts`) : addContact(name, number);
  };

  const getfilteredNames = () => {
    return (
      contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLocaleLowerCase()))
    )
  };

  const filteredNames = getfilteredNames();


  const addContact = (name, number) => {
    const contact = {
      id: uuidv4(),
      name,
      number
    };
    
    createContact(contact);
  };

 
  
  return (
    <div className="Container">

      <ContactForm onSubmit={formSubmitHandler} />

      <h2>Contacts</h2>

      <Filter value={filter} onChange={handleFilterChange} />

      <ContactList names={filteredNames}  onDelete={deleteContact}/>

    </div>
  );
}

const mapStateToProps = state => {
  return {
    contacts: state.contacts.items,
    filter: state.contacts.filter,
  }
};

const mapDispatchToProps = dispatch => ({
  createContact: contact => dispatch(contactsActions.addContact(contact)),
  deleteContact: contactId => dispatch(contactsActions.deleteContact(contactId)),
  filterContact: value => dispatch(contactsActions.filterContacts(value)),
});

export default connect(mapStateToProps,mapDispatchToProps)(App);
