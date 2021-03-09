import React from 'react';
import styles from 'Pages/Pages.module.scss';
import Header from 'components/Header';
import LoginForm from 'components/forms/LoginForm';
const LoginPage = props => {
  const onSubmit = (values, formikBag) => {
    console.log(values)
  };
  return (
    <div className={styles.main}>
      <Header location={props.location} />
      <div className={styles.container}>
        <h1 className={styles.title}>LOGIN TO YOUR ACCOUNT</h1>

        <LoginForm  onSubmit={onSubmit} />
      </div>
    </div>
  );
};

export default LoginPage;
