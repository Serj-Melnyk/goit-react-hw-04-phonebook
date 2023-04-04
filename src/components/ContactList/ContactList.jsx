import PropTypes from "prop-types"
import { Li, Button, P } from "./ContactListStyled"

export const ContactList = ({ contacts, onDelete }) => {


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


ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
        }).isRequired,
    ),
    onDelete: PropTypes.func.isRequired,

};