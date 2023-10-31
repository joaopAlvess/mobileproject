import * as Yup from 'yup';

const disciplinaValidator = Yup.object().shape({
    nome: Yup.string()
      .min(1, 'Valor muito curto')
      .max(50, 'Valor muito grande')
      .required('Campo obrigatório')
  })

export default disciplinaValidator;