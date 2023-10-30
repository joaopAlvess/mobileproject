import * as Yup from 'yup';

const professorValidator = Yup.object().shape({
  nome: Yup.string()
    .min(5, 'Valor muito curto')
    .max(50, 'Valor muito grande')
    .required('Campo obrigatório'),
  cpf: Yup.string()
    .required('Campo obrigatório'),
  email: Yup.string()
    .email('Formato de e-mail inválido')
    .required('Campo obrigatório'),
  telefone: Yup.string()
    .max(14, 'Digite no formato padrão')
    .required('Campo obrigatório'),
  cep: Yup.string()
    .max(14, 'Digite no formato padrão')
    .required('Campo obrigatório'),
  numero: Yup.number()
    .required('Campo obrigatório'),

})

export default professorValidator;