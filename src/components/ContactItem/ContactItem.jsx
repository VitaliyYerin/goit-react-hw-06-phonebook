import { deleteContact } from 'redux/contactsSlice';
import { Item, Contact, Button } from './ContactItem.styled';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const onDeleteContact = id => dispatch(deleteContact(id));
  return (
    <Item key={id}>
      <Contact>
        {name}........ {number}
      </Contact>
      <Button type="submit" onClick={() => onDeleteContact(id)}>
        Delete
      </Button>
    </Item>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactItem;
