import "./ContactList.css";

export default function ContactList({ names, onDelete }) {
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