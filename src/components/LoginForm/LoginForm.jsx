import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import css from './LoginForm.module.css';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;

    dispatch(
      logIn({
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
          Log in
        </button>
      </form>
    </div>
  );
};
