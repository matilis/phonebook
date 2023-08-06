import { Helmet } from 'react-helmet';
import { useSelector } from 'react-redux';
import { ContactForm } from 'components';
import { ContactList } from 'components';
import { Filter } from 'components';
import { Loader, Error } from 'components';
import { selectError, selectIsLoading } from 'redux/contacts/selectors';
import css from './Contact.module.css';

const Contacts = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  return (
    <div className={css.list__wrapper}>
      <Helmet>
        <title>Contacts</title>
      </Helmet>

      <div className={css.list__item}>
        <div className={css.homePage}>
          <h1 className={css.homePage__title}>Phonebook</h1>
        </div>
        <div className={css.wrapper}>
          <ContactForm />
          <Filter />
        </div>
        <div>
          {isLoading ? <Loader /> : <ContactList />}
          {error && <Error />}
        </div>
      </div>
    </div>
  );
};
export default Contacts;
