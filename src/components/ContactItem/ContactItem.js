import PropTypes from 'prop-types';
import s from './ContactItem.module.css';
import { toast } from 'react-toastify';

import { useDeleteContactsMutation } from 'redux/contacts/contactsOperation';

function ContactItem({ name, number, id }) {
    const [deleteContact, { isLoading }] = useDeleteContactsMutation();
    const deleteNumber = () => {
        deleteContact(id)
                toast.success('Contact deleted!');
    }

    return (
        <li className={s.item}><p>{name}: {number}</p>
        <button disabled={isLoading} className={s.button} onClick={deleteNumber} type="button">{isLoading ? 'Deleting...' : 'Delete'}</button></li>
    )
    
}

ContactItem.propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
}

export default ContactItem;