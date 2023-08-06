import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import css from './RegisterForm.module.css';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;

    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <div className={css.form__wrapper}>
      <form className={css.form} onSubmit={handleSubmit}>
        <label className={css.form__label}>
          Username
          <input
            className={css.form__input}
            type="text"
            name="name"
            placeholder="John Nick"
          />
        </label>
        <label className={css.form__label}>
          Email
          <input
            className={css.form__input}
            type="email"
            name="email"
            placeholder="john.nick@gmail.com"
          />
        </label>
        <label className={css.form__label}>
          Password
          <input
            className={css.form__input}
            type="password"
            name="password"
            placeholder="xxxxxxx"
          />
        </label>
        <button className={css.form__btn} type="submit">
          Register
        </button>
      </form>
    </div>
  );
};
