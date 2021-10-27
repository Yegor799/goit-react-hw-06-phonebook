// import { v4 as uuidv4 } from 'uuid';
import './App.css';
import ContactForm from './components/ContactForm/ContactForm';
import Filter from './components/Filter/Filter';
import ContactList from './components/ContactList/ContactList';


function App() {   
  
  return (
    <div className="Container">

      <ContactForm />

      <h2>Contacts</h2>

      <Filter />

      <ContactList />

    </div>
  );
}



export default App;
