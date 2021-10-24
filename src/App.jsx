import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import ContactForm from './components/ContactForm/ContactForm';
import Filter from './components/Filter/Filter';
import ContactList from './components/ContactList/ContactList';


function App() {

  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);
  const [filter, setFilter] = useState('');


  const handleFilterChange = e => {
    setFilter(e.target.value)
  }

  const formSubmitHandler = (name, number) => {
    const duplicateName = contacts.find(contact => contact.name === name);
    duplicateName ? alert(`${name} is already in contacts`) : addContact(name, number);
  }

  const getfilteredNames = () => {
    return (
      contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLocaleLowerCase()))
    )
  }

  const filteredNames = getfilteredNames();


  const addContact = (name, number) => {
    const contact = {
      id: uuidv4(),
      name,
      number
    }

    setContacts(prevState => [contact, ...prevState]);
  }

  const deleteContact = contactId => {
    setContacts(prevState => prevState.filter(contact => contact.id !== contactId))
  }

  return (
    <div className="Container">

      <ContactForm onSubmit={formSubmitHandler} />

      <h2>Contacts</h2>

      <Filter value={filter} onChange={handleFilterChange} />

      <ContactList names={filteredNames} onDelete={deleteContact} />

    </div>
  );
}

export default App;
