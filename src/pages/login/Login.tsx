import { FormEvent, useEffect, useState } from 'react';
import { Logo, Card, InputGroup, Form, Button } from '@/components';
import styles from './Login.module.css';
import { loginValidation, passwordValidation, pattern } from '@/utils/validate';

const fetchUser = async (
  authData: { login: string; password: string },
  restorePassword = false
) => {
  const res = await fetch(
    `http://localhost:3000/users?login=${authData.login}`
  );

  if (res.ok) {
    const data = await res.json();

    if (data[0].password === authData.password) return data;

    if (restorePassword) {
      return data;
    }
  }
};

export function Login() {
  const [user, setUser] = useState<any>(null);
  const [restorePassword, setRestorePassword] = useState(false);
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [validateMessage, setValidateMessage] = useState<string | null>(null);

  const handleGoOut = () => {
    setUser(null);
  };

  const handleSubmitForm = (evt: FormEvent) => {
    evt.preventDefault();
    const loginMessage = loginValidation(login);
    const passwordMessage = !restorePassword && passwordValidation(password);

    if (loginMessage) {
      setValidateMessage(loginMessage);
    } else if (passwordMessage) {
      setValidateMessage(passwordMessage);
    } else {
      setValidateMessage(null);
    }

    if (!loginMessage && !passwordMessage) {
      console.log('hi');
      fetchUser(
        {
          // login: telNumber.replace(pattern, '+7 $2 $3 $4 $5'),
          login: login.replace(pattern, '7 $2 $3 $4 $5'),
          password,
        },
        restorePassword
      ).then((data) => {
        if (data) {
          if (restorePassword) {
            setValidateMessage(`Ваш пароль ${data[0].password}`);
          }
          setUser(data[0]);
          setLogin('');
          setPassword('');
        } else {
          setValidateMessage('Неверные данные');
        }
      });
    }
    // setValidateMessage(null);
  };

  useEffect(() => {
    setValidateMessage(null);
  }, [restorePassword]);

  return (
    <main>
      <h2 className={'visually-hidden'}>login page</h2>
      <Card>
        <Logo />
        {restorePassword && (
          <h3 className={styles.title}>Восстановление пароля</h3>
        )}
        {validateMessage && (
          <span className={styles.error}>{validateMessage}</span>
        )}
        {!user ? (
          <Form>
            {restorePassword ? (
              <InputGroup
                value={login}
                handleChange={setLogin}
                label={'Введите номер телефона '}
                // type={'tel'}
              />
            ) : (
              <>
                <InputGroup
                  value={login}
                  handleChange={setLogin}
                  label={'Введите логин'}
                  // type={'tel'}
                />
                <InputGroup
                  value={password}
                  handleChange={setPassword}
                  label={'Введите пароль'}
                  type={'password'}
                />
              </>
            )}
            <Button
              secondary
              handler={() => setRestorePassword((prev) => !prev)}
            >
              {restorePassword ? 'назад' : 'Забыли пароль?'}
            </Button>
            <Button type={'submit'} handler={handleSubmitForm}>
              {restorePassword ? 'Восстановить пароль' : 'Войти'}
            </Button>
          </Form>
        ) : (
          <Button type={'submit'} handler={handleGoOut}>
            Выйти
          </Button>
        )}
      </Card>
    </main>
  );
}
