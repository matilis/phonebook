import Notiflix from 'notiflix';
import { useEffect } from 'react';
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
        width: '300px',
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
      width: '300px',
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

  useEffect(() => {
    const btnForm1 = document.getElementById('btnForm1');
    const btnForm2 = document.getElementById('btnForm2');

    function handlebtnForm2Click(e) {
      e.preventDefault();
      btnForm1.click();

      if ('vibrate' in navigator) {
        navigator.vibrate(200);
      }
    }

    btnForm2.addEventListener('click', handlebtnForm2Click, false);

    return () => {
      btnForm2.removeEventListener('click', handlebtnForm2Click, false);
    };
  }, []);

  return (
    <div className={css.containerBox}>
      <div className={css.wrapper}>
        <form onSubmit={handleSubmit} className={css.form}>
          <input
            type="text"
            name="name"
            pattern="^[A-Za-z.'\- ]+$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            className={css.form__input}
            placeholder="Contact name"
          />

          <input
            type="tel"
            name="number"
            pattern="^\+?\d{1,4}?\s?\(?\d{1,4}?\)?\s?\d{1,4}\s?\d{1,4}\s?\d{1,9}$"
            title="number number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            placeholder="Contact number"
            className={css.form__input}
          />

          <button id="btnForm1" type="submit" className={css.form__buttonHide}>
            Add contact
          </button>
        </form>
      </div>
      <button id="btnForm2" className={css.form__button}>
        Add contact
      </button>
    </div>
  );
};
