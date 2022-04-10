import React from 'react';
import {Button, Separator, Text} from '~components';
import {useDispatch} from 'react-redux';
import {Creators} from '~store/reducers';
import {Formik} from 'formik';

import {
  Container,
  Logo,
  LogoContainer,
  Input,
  RegisterContainer,
} from './styles';

const Login = ({navigation}) => {
  const dispatch = useDispatch();

  const submit = values => {
    dispatch(Creators.login.request({data: values}));
  };

  return (
    <Container>
      <LogoContainer>
        <Logo source={require('./assets/trevo.jpeg')} />
      </LogoContainer>
      <Formik initialValues={{}} onSubmit={values => submit(values)}>
        {({handleChange, handleSubmit}) => (
          <>
            <Input
              label="Inscrição estadual"
              returnKeyType="next"
              onChangeText={handleChange('inscricao')}
            />
            <Input
              label="Senha"
              secureTextEntry={true}
              onChangeText={handleChange('password')}
            />
            <Separator height="20" />
            <Button
              style={{width: '80%', marginLeft: '10%'}}
              onPress={handleSubmit}>
              Login
            </Button>
          </>
        )}
      </Formik>
      <RegisterContainer>
        <Separator height="20" />
        <Text
          underline
          color="primary"
          onPress={() => navigation.navigate('Register')}>
          Cadastro
        </Text>
      </RegisterContainer>
    </Container>
  );
};

export default Login;
