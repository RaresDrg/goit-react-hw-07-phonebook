import Section from './Section/Section';
import Phonebook from './Phonebook/Phonebook';
import Contacts from './Contacts/Contacts';
import '../index.css';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from '../redux/operations';

import Notify from './common/Notify/Notify';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Section title="This is my Contact Book">
        <Phonebook />
        <Contacts />
      </Section>

      <Notify />
    </>
  );
};

export default App;
