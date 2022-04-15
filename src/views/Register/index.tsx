import React from 'react';
import {ScrollView} from 'react-native';
import database from '@react-native-firebase/database';
import {Input, Separator, Button, Header} from '~components';
import {Formik} from 'formik';
import * as Modal from '~services/modal';
import {Default} from '~modals';

import {Container, Content} from './styles';

const Register = ({navigation}) => {
  const registerAdm = values => {
    database()
      .ref('users/' + values.userName + values.password)
      .set({...values, type: 1});
    return Modal.show(() => (
      <Default
        title="✅"
        description="cadastrado com sucesso!!"
        buttons={[
          {id: 0, title: 'Ok', onPress: () => navigation.navigate('Home')},
        ]}
      />
    ));
  };

  return (
    <Container>
      <Header inverted title="Cadastro Administrativo" />
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
                <Input label="Nome" name="userName" returnKeyType="next" />
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
