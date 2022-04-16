import * as yup from 'yup';

export const schemaLogin = yup
  .object({
    email: yup.string().email('E-mail inválido').required('Campo Obrigatório'),
    password: yup.string().required('Campo Obrigatório'),
  })
  .required();
