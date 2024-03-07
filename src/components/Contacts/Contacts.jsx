import styles from './Contacts.module.css';

import FilterContactsInput from './FilterContactsInput/FilterContactsInput';
import ContactsList from './ContactsList/ContactsList';
import Loader from '../common/Loader/Loader';
import ErrorAlert from '../common/ErrorAlert/ErrorAlert';

import { useSelector } from 'react-redux';
import { selectError, selectIsLoading } from '../../redux/selectors';

const Contacts = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  return (
    <div className={styles.contacts}>
      <h2>Contacts</h2>
      <FilterContactsInput />

      {isLoading && <Loader />}
      {error && <ErrorAlert error={error} />}
      {!isLoading && !error && <ContactsList />}
    </div>
  );
};

export default Contacts;
