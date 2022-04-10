import * as yup from 'yup';
import {isCPF} from 'brazilian-values';

const WEAK_PASSWORD = 'Sua senha precisa conter ao menos 6 dígitos';

const PasswordCheck = yup
  .string()
  .nullable()
  .min(6, WEAK_PASSWORD)
  .required('A senha é obrigatória!');

const NameCheck = yup.string().nullable().required('O nome é obrigatório!');
const farmNameCheck = yup.string().nullable().required('O nome é obrigatório!');
const cityFarmNameCheck = yup
  .string()
  .nullable()
  .required('O nome é obrigatório!');
const stateFarmNameCheck = yup
  .string()
  .nullable()
  .required('O nome é obrigatório!');

const inscricaoCheck = yup
  .string()
  .nullable()
  .required('A inscrição estadual é obrigatória!');

const CpfCheck = yup
  .string()
  .nullable()
  .required('O CPF é obrigatório')
  .when('required', {
    is: true,
    then: yup
      .string()
      .nullable()
      .test('valid', 'Insira um número de CPF válido', cpf => isCPF(cpf)),
    otherwise: yup
      .string()
      .nullable()
      .test(
        'valid',
        'Insira um número de CPF válido',
        cpf => !cpf || isCPF(cpf),
      ),
  });

const registerValidationSchema = yup.object().shape({
  name: NameCheck,
  password: PasswordCheck,
  inscricao: inscricaoCheck,
  cpf: CpfCheck,
  farmName: farmNameCheck,
  cityFarmName: cityFarmNameCheck,
  stateFarmName: stateFarmNameCheck,
});
export default registerValidationSchema;
