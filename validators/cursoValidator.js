import * as Yup from 'yup';

const cursoValidator = Yup.object().shape({
  nome: Yup.string()
    .min(5, 'Valor muito curto')
    .max(50, 'Valor muito grande')
    .required('Campo obrigatório'),
  duracao: Yup.number()
    .required('Campo obrigatório'),
  modalidade: Yup.string()
    .max(1, 'Referencie como P (Presencial) H (Hibrído) D (A distância)')
    .required('Campo obrigatório')
})

export default cursoValidator;