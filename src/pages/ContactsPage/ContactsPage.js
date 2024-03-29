import ContactForm from 'components/ContactForm';
import ContactList from "components/ContactList";
import Filter from "components/Filter";
import s from './ContactsPage.module.css'

function ContactsPage() {
    return (
        <div>
            <h1 className={s.title}>Phonebook</h1>
    <ContactForm />
       <h2 className={s.title}>Contacts</h2>
        <Filter />
         <ContactList />
        </div>
    )
};

export default ContactsPage;