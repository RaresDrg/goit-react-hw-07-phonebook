import styles from './Phonebook.module.css';

import NameInput from './NameInput/NameInput';
import NumberInput from './NumberInput/NumberInput';
import SubmitBtn from './SubmitBtn/SubmitBtn';

import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/operations';
import { setFilter } from '../../redux/slices/filterSlice';
import { selectContacts } from '../../redux/selectors';

const Phonebook = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(selectContacts);

  const checkExistence = name => {
    return contacts.find(
      item => item.name.toUpperCase() === name.toUpperCase()
    );
  };

  const formatNumber = number => {
    const formatedNumber = number.padEnd(10, '9').split('');

    formatedNumber.length > 10 &&
      formatedNumber.splice(10, formatedNumber.length);

    formatedNumber.splice(3, 0, '-');
    formatedNumber.splice(7, 0, '-');

    return formatedNumber.join('');
  };

  const capitalize = text => {
    return text
      .split(' ')
      .map(
        word =>
          word.charAt(0).toUpperCase() +
          word.slice(1, word.length).toLowerCase()
      )
      .join(' ');
  };

  const handleSubmit = event => {
    event.preventDefault();

    const form = event.target;
    const name = capitalize(form.elements.name.value.trim());
    const number = formatNumber(form.elements.number.value.trim());

    checkExistence(name)
      ? alert(`"${name}" is already in contacts`)
      : dispatch(addContact({ name, phone: number })) &&
        dispatch(setFilter(''));

    form.reset();
  };

  return (
    <div className={styles.phonebook}>
      <h2>Phonebook</h2>

      <form onSubmit={handleSubmit}>
        <NameInput />
        <NumberInput />
        <SubmitBtn text="Add contact" />
      </form>
    </div>
  );
};

export default Phonebook;
