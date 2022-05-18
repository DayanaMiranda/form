import * as Yup from 'yup';

export default Yup.object().shape({
    name: Yup.string().min(2).required(),
    lastname: Yup.string().min(2).required(),
    email: Yup.string().email().required(),
    password: Yup.string().min(6).required(),
    confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Senhas não conferem')
});