import PropTypes from "prop-types"
import { Formik } from 'formik';
import { Form, FormLabel,ErrorMessage ,Button,Field} from './ContactFormStyled';
import * as Yup from "yup";
import { nanoid } from 'nanoid';
 
const ContactSchema = Yup.object().shape({

    name: Yup.string().trim().min(2, 'Too Short!').max(50, 'Too Long!')
        .matches(/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
         "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan")
    .required('Required'),


    number: Yup.string().trim().min(2, 'Too Short!').matches(/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
        "Phone number must be digits and can contain spaces, dashes, parentheses and can start with +").required('Required'),

 });


export const ContactForm = ({ onSubmitContact }) => {
    return (
        <Formik
            initialValues={{
                name: '',
                number: '',
        
            }}
            validationSchema={ContactSchema}


            onSubmit={(values, actions) => {
            
                onSubmitContact({
                    ...values,
                    id: nanoid(),
                });
                actions.resetForm()
            }}
        >

            <Form>
                <FormLabel>
                    Name
                    <Field name="name" />
                    <ErrorMessage name="name" component={'div'} />
                </FormLabel>

                <FormLabel>
                    Number
                    <Field name="number" type="tel" />
                    <ErrorMessage name="number" component={'div'} />
                </FormLabel>

                <Button type='submit'>Add contact</Button>


            </Form>

        </Formik >
    )
};


ContactForm.propTypes = {
    onSubmitContact: PropTypes.func.isRequired
};