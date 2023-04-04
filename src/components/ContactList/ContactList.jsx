import PropTypes from "prop-types"
import { Component } from "react"
import { Li, Button, P } from "./ContactListStyled"

export class ContactList extends Component {

    state = {
        contacts: [],
        filter: '',
        name: '',
        number: ''
    }
    

    render() {

        const { contacts, onDelete } = this.props


        return (
         
         <ul>
             {contacts.map(contact => {
                 
                 return ( 
                     
                     <Li key={contact.id} >
                       <P>{contact.name} :</P>
                         <P>{contact.number}</P>
                        
                          
                         <Button onClick={() => onDelete(contact.id)}>Delete</Button>

                     </Li>
                 )
             })}
         </ul>
    )
  }
};

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
        }).isRequired,
    ).isRequired,
    onDelete: PropTypes.func.isRequired,

};