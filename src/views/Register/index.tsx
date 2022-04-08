import React from 'react';
import {ScrollView} from 'react-native';
import {Header, Input, Separator, Button, Text} from '~components';
import {Formik} from 'formik';

import {Container, Content} from './styles';

const Register = ({navigation}) => {
  const submit = values => {
    console.log(values);
  };

  return (
    <Container>
      <Header onPress={() => navigation.goBack()} />
      <Formik
        initialValues={{email: '', password: '', name: '', cpf: ''}}
        onSubmit={values => submit(values)}>
        {({handleSubmit}) => (
          <>
            <ScrollView>
              <Content>
                <Text size="large" bold color="primary">
                  Registro
                </Text>
                <Input label="Nome" name="name" />
                <Input label="CPF" name="cpf" />
                <Input label="Nome" name="stateRegistration" />
                <Input label="Nome da Fazenda" name="farmName" />
                <Input label="Municipio da Fazenda" name="cityFarmName" />
                <Input label="Estado da Fazenda" name="stateFarmName" />
                <Input label="Email" name="email" />
                <Input label="Senha" name="password" />
              </Content>
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
