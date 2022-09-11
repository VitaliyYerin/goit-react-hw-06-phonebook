import ContactItem from 'components/ContactItem';
import Notification from 'components/Notification';
import { useSelector } from 'react-redux';
import { AllContacts, ListContacts } from './ContactList.styled';

const getFilteredContacts = (items, filter) =>
  items.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

const ContactList = () => {
  const items = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.contacts.filter);
  const contacts = getFilteredContacts(items, filter);

  return (
    <ListContacts>
      {contacts.length > 0 && (
        <AllContacts>All Contacts : {contacts.length}</AllContacts>
      )}
      {contacts.length > 0 ? (
        contacts.map(({ id, name, number }) => (
          <ContactItem key={id} id={id} name={name} number={number} />
        ))
      ) : (
        <Notification message="No contacts" />
      )}
    </ListContacts>
  );
};

export default ContactList;
