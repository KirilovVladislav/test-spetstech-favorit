import { FormEvent, useState } from 'react';
import { Logo, Card, InputGroup, Form, Button } from '@/components';
import styles from './Login.module.css';
import { loginValidation, passwordValidation, pattern } from '@/utils/validate';

export function Login() {
  const [authData, setAuthData] = useState<{
    login: string;
    password: string;
  } | null>(null);
  const [restorePassword, setRestorePassword] = useState(false);
  const [telNumber, setTelNumber] = useState('');
  const [password, setPassword] = useState('');
  const [validateMessage, setValidateMessage] = useState<string | null>(null);

  const handleGoOut = () => {
    setAuthData(null);
  };

  const handleSubmitForm = (evt: FormEvent) => {
    evt.preventDefault();
    const loginMessage = loginValidation(telNumber);
    const passwordMessage = passwordValidation(password);

    if (loginMessage) {
      setValidateMessage(loginMessage);
    } else if (passwordMessage) {
      setValidateMessage(passwordMessage);
    } else {
      setValidateMessage(null);
    }

    if (!loginMessage && !passwordMessage) {
      setAuthData({
        login: telNumber.replace(pattern, '+7 $2 $3 $4 $5'),
        password,
      });
      setTelNumber('');
      setPassword('');
    }
  };

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
        {!authData ? (
          <Form>
            {restorePassword ? (
              <InputGroup
                value={telNumber}
                handleChange={setTelNumber}
                label={'Введите номер телефона '}
                // type={'tel'}
              />
            ) : (
              <>
                <InputGroup
                  value={telNumber}
                  handleChange={setTelNumber}
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
              Войти
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
