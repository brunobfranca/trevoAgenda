import React from 'react';
import {ScrollView} from 'react-native';
import {Header, Input, Separator, Button} from '~components';
import {Formik} from 'formik';
import registerValidationSchema from './register';
import {Creators} from '~store/reducers';
import {useDispatch} from 'react-redux';

import {Container, Content} from './styles';

const Register = () => {
  const dispatch = useDispatch();
  const submit = values => {
    dispatch(Creators.user.create.request({data: values}));
    // navigation.reset({
    //   index: 0,
    //   routes: [{name: 'Home'}],
    // });
  };

  return (
    <Container>
      <Header title="Cadastrar fornecedor" inverted />
      <Formik
        initialValues={{email: '', password: '', name: '', cpf: ''}}
        validateOnBlur={false}
        validateOnChange={false}
        validationSchema={registerValidationSchema}
        onSubmit={values => submit(values)}>
        {({handleSubmit}) => (
          <>
            <ScrollView>
              <Content>
                <Input label="Nome" name="name" returnKeyType="next" />
                <Input label="CPF" name="cpf" keyboardType="numeric" />
                <Input
                  label="Inscrição estadual"
                  name="inscricao"
                  keyboardType="numeric"
                />
                <Input label="Nome da Fazenda" name="farmName" />
                <Input label="Municipio da Fazenda" name="cityFarmName" />
                <Input label="Estado da Fazenda" name="stateFarmName" />
              </Content>
            </ScrollView>
            <Separator height="20" />
            <Button rect onPress={handleSubmit}>
              Cadastrar
            </Button>
          </>
        )}
      </Formik>
    </Container>
  );
};

export default Register;
