import { useEffect, useState } from "react";
import { GlobalStyle } from "./GlobalStyle";
import { ContactForm } from "./Form/ContactForm";
import { Filter } from "./Filter/Filter";
import { ContactList } from "./ContactList/ContactList";
import { Layout } from "./Layout/Layout";
import initialContacts from "../components/contacts.json";


const getInitialContacts = () => {

  const savedContacts = localStorage.getItem('contacts');

  if (savedContacts !== null) {
    const parsedContacts = JSON.parse(savedContacts);
    return parsedContacts;
  }
  
  return initialContacts;
  
};


export const App = () => {

  const [contacts, setContacts] = useState(getInitialContacts);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  
  const addContact = (newContact) => {
   
    if (contacts.some(
      item => item.name.toLowerCase() === newContact.name.toLowerCase()
    )
    ) {
      return alert(`${newContact.name} is already in contacts`);
    }

    setContacts(prevState => [...prevState, newContact]);

  };


  const deleteContact = (contactNanoId) => {
    setContacts((prevState) => prevState.filter((contact) => contact.id !== contactNanoId));
  };


  const findContact = (evt) => {
    setFilter(evt.currentTarget.value)
  };


  const getFilteredContacts = () => {

    const normalizedFilter = filter.toLowerCase().trim();

   return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter)
    );
  };
        
 


  const filteredContacts = getFilteredContacts();

  return (

    <Layout>
        
      <h1>Phonebook</h1>
        
      <ContactForm
        onSubmitContact={addContact}
      />

      <h2>Contacts</h2>
        
      <Filter
        values={filter}
        onChange={findContact}
      />


      <ContactList

        onDelete={deleteContact}
        contacts={filteredContacts}
      />
        
      <GlobalStyle />
        
    </Layout>
  );
};







