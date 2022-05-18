import React from 'react'
import { Formik, Field, Form } from 'formik';
import schema from '../schema.js';

export default function Register() {

    function onSubmit (values, actions) {
        console.log('SUBMIT', values);
        actions.setSubmitting(false);
    }

    return (
        <div nameClass="register-form">
            <Formik
                validation={schema}
                onSubmit={onSubmit}
                initialValues={{
                    name: '',
                    lastname: '',
                    email: '',
                    password: '',
                    confirmPassword: ''
                }}


                render={({ values }) => (
                    <Form>
                        <div>
                            <label>Nome</label>
                            <Field name="name" type="text" />
                        </div>
                        <div>
                            <label>Sobrenome</label>
                            <Field name="lastname" type="text" />
                        </div>
                        <div>
                            <label>Email</label>
                            <Field name="email" type="email" />
                        </div>
                        <div>
                            <label>Senha</label>
                            <Field name="password" type="password" />
                        </div>
                        <div>
                            <label>Confirmar Senha</label>
                            <Field name="confirmPassword" type="password" />
                        </div>
                        <button type="submit">Criar conta</button>
                    </Form>
                )}
            />
        </div>
    );
}

/*https://www.youtube.com/watch?v=NcMsGS2_87U&ab_channel=ViniciusDacal */