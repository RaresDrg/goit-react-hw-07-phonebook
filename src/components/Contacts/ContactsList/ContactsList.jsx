import styles from './ContactsList.module.css';
import ContactItem from '../ContactItem/ContactItem';
import AbsentContactsNotification from '../AbsentContactsNotification/AbsentContactsNotification';

import { useSelector } from 'react-redux';
import { selectFilteredContacts } from '../../../redux/selectors';

const ContactsList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);

  if (filteredContacts.length === 0) {
    return <AbsentContactsNotification />;
  }

  return (
    <ul className={styles.contactsList}>
      {filteredContacts.map(item => (
        <ContactItem key={item.id} contact={item} />
      ))}
    </ul>
  );
};

export default ContactsList;
