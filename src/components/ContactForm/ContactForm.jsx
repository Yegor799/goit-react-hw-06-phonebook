import "./ContactForm.css";
import { useState } from "react";
import { connect } from "react-redux";
import * as contactsActions from "../../redux/contacts/contacts-actions"

 function ContactForm({contacts, addContact}) {

    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

     const handleNameChange = e => {
         setName(e.target.value);
     };

     const handleNumberChange = e => {
         setNumber(e.target.value);
     };
     
     const onSubmit = (name, number) => {
         const duplicateName = contacts.find(contact => contact.name === name);
         duplicateName ? alert(`${name} is already in contacts`) : addContact(name, number);
     };

     const handleSubmit = e => {
         e.preventDefault();
         onSubmit(name, number);
         setName('');
         setNumber('');
     };
     
    return (
        <form onSubmit={handleSubmit} className="ContactForm">
            <p>Name</p>
            <label>
                <input
                    type="text"
                    name="name"
                    value={name}
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                    required
                    onChange={handleNameChange}

                />
            </label>

            <p>Number</p>
            <label>
                <input
                    type="tel"
                    name="number"
                    value={number}
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                    required
                    onChange={handleNumberChange}
                />
            </label>
            <button type="submit" className="ContactForm__button">Add contact</button>
        </form>
    )
 }

const mapStateToProps = state => ({
    contacts: state.contacts.items,
});

const mapDispatchToProps = dispatch => ({
    addContact: (name, number) => dispatch(contactsActions.addContact(name, number)) 
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);