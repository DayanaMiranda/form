import React from 'react'
import * as yup from 'yup';
import { Form, Formik, Field, ErrorMessage } from 'formik';
import { Link } from 'react-router-dom';
import './login.css';

export default function Login() {

  const handleClickLogin = (values) => console.log(values);

  const validationLogin = yup.object().shape({
    email: yup.string().email("Não é uma email válido").required("O email é obrigatório"),
    password: yup.string().min(6, "A senha precisa ter 6 ou mais caracteres").required(),
  });

  return (
    <div className="container-login">
      <h1 className="login-title">Iniciar Sessão</h1>
      <Formik
        initialValues={{}}
        onSubmit={handleClickLogin}
        validationSchema={validationLogin}
      >
        <Form className="form-login">
          <div className="form-fields">
            <label htmlFor="email">Email: </label>
            <Field name="email" className="form-field" type="email" placeholder="Email" />

            <ErrorMessage
              name="email"
              component="span"
              className="error-message" />
          </div>

          <div className="form-fields">
            <label htmlFor="password">Senha: </label>
            <Field name="password" className="form-field" placeholder="Senha" />

            <ErrorMessage
              name="password"
              component="span"
              className="error-message" />
          </div>
          <button className="button-login" type="submit">Entrar</button>
          <p>Ainda não tem conta <Link to="/Register">Registre-se</Link></p>



        </Form>
      </Formik>

    </div>
  );
}
