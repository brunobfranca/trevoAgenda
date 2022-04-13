import React from 'react';
import {Button, Separator} from '~components';
import {useDispatch} from 'react-redux';
import {Creators} from '~store/reducers';
import {Formik} from 'formik';

import {Container, Logo, LogoContainer, Input} from './styles';

const Login = () => {
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
              label="Usuário"
              returnKeyType="next"
              onChangeText={handleChange('user')}
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
    </Container>
  );
};

export default Login;
