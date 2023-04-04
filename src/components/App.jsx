import { Component } from "react";
import { GlobalStyle } from "./GlobalStyle";
import { ContactForm } from "./Form/ContactForm";
import { Filter } from "./Filter/Filter";
import { ContactList } from "./ContactList/ContactList";
import { Layout } from "./Layout/Layout";
import initialContacts from "../components/contacts.json";


export class App extends Component {

  state = {
  contacts: [],
  filter: ''
  }
  
  componentDidMount() { 
    const savedContacts = localStorage.getItem('contacts');
    if (savedContacts !== null) {
      const parsedContacts = JSON.parse(savedContacts);
      this.setState({ contacts: parsedContacts });
      return;
    }
    this.setState({contacts: initialContacts})
   }

  
  componentDidUpdate(prevProps, prevState) { 
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
    }
  } 
  
  
   addContact = (newContact) => {
    if (
      this.state.contacts.some(
        item => item.name.toLowerCase() === newContact.name.toLowerCase()
      )
    ) {
      return alert(`${newContact.name} is already in contacts`);
    }

    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, newContact],
      };
    });
  };


  deleteContact = (contactNanoId) => {
    this.setState((prevState) => {
      return {
        contacts: prevState.contacts.filter((contact) => contact.id !== contactNanoId)
      }
    })
  };


  findContact = (evt) => {
    this.setState({ filter: evt.currentTarget.value })
  };


  getFilteredContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase().trim();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };
        
 

  render() {
    const filteredContacts = this.getFilteredContacts();

    return (

      <Layout>
        
        <h1>Phonebook</h1>
        
        <ContactForm
          onSubmitContact={this.addContact}
        />

        <h2>Contacts</h2>
        
        <Filter
          values={this.state.filter}
          onChange={this.findContact}
        />


        <ContactList
          // contacts={this.state.contacts}
          onDelete={this.deleteContact}  
          contacts={filteredContacts}
        />
        
        <GlobalStyle />
        
      </Layout>
    );
  }
};






