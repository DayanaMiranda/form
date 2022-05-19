import React from 'react'
import * as yup from 'yup';
import { Form, Formik, Field, ErrorMessage } from 'formik';
import { Link } from 'react-router-dom';


export default function Register() {

    const handleClickRegister = (values) => console.log(values);

    const validationRegister = yup.object().shape({
        name: yup.string().min(2, "O nome precisa ter ao menos 2 caracteres").required("O nome é obrigatório"),
        lastname: yup.string().min(2, "O sobrenome precisa ter ao menos 2 caracteres").required("O sobrenome é obrigatório"),
        email: yup.string().email("Hmmmm.. esse email não parece válido").required("O email é obrigatório"),
        confirmEmail: yup.string().email().required().oneOf([yup.ref('email'), null], "Os emails não coincidem"),        
        password: yup.string().min(6, "A senha precisa ter 6 ou mais caracteres").required("A senha é obrigatória"),
        confirmPassword: yup.string().required().oneOf([yup.ref('password'), null], 'As senhas não coincidem'),       
    });

    return (
        <div className="container-register">
            <h1>Criar Conta</h1>
            <Formik
                initialValues={{}}
                onSubmit={handleClickRegister}
                validationSchema={validationRegister}
            >
                <Form className="form-login">
                    
                <div className="form-fields">
                        <Field name="name" className="form-field" type="text" placeholder="Nome" />

                        <ErrorMessage
                            name="name"
                            component="span"
                            className="error-message" />
                    </div>

                    <div className="form-fields">
                        <Field name="lastname" className="form-field" type="text" placeholder="Sobrenome" />

                        <ErrorMessage
                            name="lastname"
                            component="span"
                            className="error-message" />
                    </div>
                    
                    <div className="form-fields">
                        <Field name="email" className="form-field" type="email" placeholder="Email" />

                        <ErrorMessage
                            name="email"
                            component="span"
                            className="error-message" />
                    </div>

                    <div className="form-fields">
                        <Field name="confirmEmail" className="form-field" type="email" placeholder="Confirme seu email" />

                        <ErrorMessage
                            name="confirmEmail"
                            component="span"
                            className="error-message" />
                    </div>

                    <div className="form-fields">
                        <Field name="password" className="form-field" placeholder="Senha" />

                        <ErrorMessage
                            name="password"
                            component="span"
                            className="error-message" />
                    </div>

                    <div className="form-fields">
                        <Field name="confirmPassword" className="form-field" placeholder="Confirme sua senha" />

                        <ErrorMessage
                            name="confirmPassword"
                            component="span"
                            className="error-message" />
                    </div>
                    <button className="button-register" type="submit">Criar conta</button>
                    <p>Já tem uma conta? <Link to="/Login">Iniciar sessão</Link></p>



                </Form>
            </Formik>

        </div>
    );
}

