import Notiflix from 'notiflix';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/operations';
import { selectContacts } from 'redux/contacts/selectors';
import css from './ContactForm.module.css';

export const ContactForm = () => {
  const dispatch = useDispatch();

  const stateContacts = useSelector(selectContacts);
  const stateContactsNames = stateContacts.map(contact => contact.name);

  const handleSubmit = event => {
    event.preventDefault();
    const contact = {
      name: event.target.elements.name.value,
      number: event.target.elements.number.value,
    };

    if (stateContactsNames.includes(contact.name)) {
      event.target.reset();
      return Notiflix.Notify.warning(`${contact.name} is alredy in contacts`, {
        width: '500px',
        position: 'center-top',
        distance: '18px',
        svgSize: '120px',
        timeout: 3000,
        borderRadius: '3px',
        fontFamily: 'Dosis',
        fontSize: '20px',
      });
    }

    dispatch(addContact(contact));
    Notiflix.Notify.success(`${contact.name} added`, {
      width: '500px',
      position: 'center-top',
      distance: '18px',
      svgSize: '120px',
      timeout: 3000,
      borderRadius: '3px',
      fontFamily: 'Dosis',
      fontSize: '20px',
    });
    event.target.reset();
  };

  return (
    <div className={css.wrapper}>
      <form onSubmit={handleSubmit} className={css.form}>
        <label className={css.form__name}>
          <input
            type="text"
            name="name"
            pattern="^[A-Za-z.'\- ]+$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            className={css.form__input}
            placeholder="Contact name"
          />
        </label>

        <label className={css.form__number}>
          <input
            type="tel"
            name="number"
            pattern="^\+?\d{1,4}?\s?\(?\d{1,4}?\)?\s?\d{1,4}\s?\d{1,4}\s?\d{1,9}$"
            title="number number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            placeholder="Contact number"
            className={css.form__input}
          />
        </label>

        <button type="submit" className={css.form__button}>
          Add contact
        </button>
      </form>
    </div>
  );
};
