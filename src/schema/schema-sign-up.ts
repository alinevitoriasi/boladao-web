import * as yup from 'yup';

export const schemaSignUp = yup
  .object({
    username: yup.string().required('Campo Obrigatório'),
    email: yup.string().email('E-mail inválido').required('Campo Obrigatório'),
    password: yup.string().required('Campo Obrigatório'),
    comparePassword: yup
      .string()
      .required('Campo Obrigatório')
      .oneOf([yup.ref('password'), null], 'Senhas não coincidem'),
  })
  .required();
