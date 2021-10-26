import "./ContactList.css";
import { connect } from "react-redux";
import * as contactActions from "../../redux/contacts/contacts-actions";

function ContactList({ names, onDelete }) {
    return (
        <ul className="ContactList">
            {names.map(contact => {
                return (
                    <li key={contact.id} className="ContactList__item">
                        <p>{contact.name}: {contact.number}</p>
                        <button onClick={() => onDelete(contact.id)}>Delete</button>
                    </li>
                )
            })}
        </ul>
    )
}

const mapStateToProps = state => {

  const { filter, items } = state.contacts;
  const filteredNames = items.filter(item => item.name.toLowerCase().includes(filter.toLowerCase()));

    return {
        names: filteredNames,
    }
};

const mapDispatchToProps = dispatch => ({
    onDelete: contactID => dispatch(contactActions.deleteContact(contactID))
})

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);