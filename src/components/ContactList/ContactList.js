import { useSelector } from 'react-redux';
import { getFilter } from "redux/contacts/selectors";
import { useGetContactsQuery } from 'redux/contacts/contactsOperation';


import ContactItem from "components/ContactItem";
import s from './ContactList.module.css';

function ContactList() {
    const { data } = useGetContactsQuery();
    const filter = useSelector(getFilter);

  const getContacts = () => {
    if (filter === '') {
      return data;
    }

    return data.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };
  const contacts = getContacts();
  
         return (
        <ul className={s.list}>
            {contacts && contacts.map(({ id, name, number }) => (
                <ContactItem
                    key={id}
                    id={id}
                    name={name}
                    number={number}
                />
           ))} 
            </ul>
        )  
};

export default ContactList;