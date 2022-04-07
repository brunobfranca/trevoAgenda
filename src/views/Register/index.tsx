import React from 'react';
import {ScrollView} from 'react-native';
import {Header, Input, Separator, Button, Text} from '~components';
import {Formik} from 'formik';

import {Container} from './styles';

const Register = ({navigation}) => {
  console.log(navigation);
  const submit = values => {
    console.log(values);
  };

  //   Nome
  // CPF
  // Inscrição Estadual
  // Nome da Fazenda
  // Municio da Fazenda
  // Estado da Fazenda
  return (
    <Container>
      <Header onPress={() => navigation.goBack()} />
      <Formik
        initialValues={{email: '', password: ''}}
        onSubmit={values => submit(values)}>
        {({handleChange, handleSubmit}) => (
          <>
            <Text size="large" bold color="primary">
              Registro
            </Text>
            <ScrollView>
              <Input label="Nome" name="name" />
              <Input label="CPF" name="cpf" />
              <Input label="Nome" name="stateRegistration" />
              <Input label="Email" name="email" />
              <Input label="Senha" name="password" />
              <Input label="Nome da Fazenda" name="farmName" />
              <Input label="Municipio da Fazenda" name="cityFarmName" />
              <Input label="Estado da Fazenda" name="stateFarmName" />
            </ScrollView>
            <Separator height="20" />
            <Button rect onPress={handleSubmit}>
              Cadastro
            </Button>
          </>
        )}
      </Formik>
    </Container>
  );
};

export default Register;
