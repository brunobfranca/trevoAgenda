import React from 'react';
import {View, ScrollView} from 'react-native';
import database from '@react-native-firebase/database';
import {Input, Text, Separator, Button, Header} from '~components';
import {Formik} from 'formik';

import {Container, Content} from './styles';

const Register = ({navigation}) => {
  const registerAdm = values => {
    database()
      .ref('users/' + values.userName + values.password)
      .set({...values, type: 2});
  };

  return (
    <Container>
      <Header
        inverted
        onPress={() => navigation.goBack()}
        title="Cadastro Administrativo"
      />
      <Formik
        initialValues={{}}
        validateOnBlur={false}
        validateOnChange={false}
        onSubmit={values => registerAdm(values)}>
        {({handleSubmit}) => (
          <>
            <ScrollView>
              <Content>
                <Separator height="10" />
                <Input label="Nome" name="name" returnKeyType="next" />
                <Input label="Senha" name="password" secureTextEntry />
              </Content>
            </ScrollView>
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
