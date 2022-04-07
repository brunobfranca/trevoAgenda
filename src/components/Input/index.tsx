import React from 'react';
import {View} from 'react-native';
import {Input, Error, Container} from './styles';
import {useFormikContext} from 'formik';

const Component = ({name, ...rest}) => {
  const formik = useFormikContext();
  return (
    <Container>
      <Input
        {...rest}
        autoCorrect={false}
        autoCapitalize="none"
        returnKeyType="next"
        value={formik.getFieldProps(name).value}
        error={formik.errors[name]}
        onChangeText={text => formik.setFieldValue(name, text)}
      />
      {formik.errors[name] && <Error>{formik.errors[name]}</Error>}
    </Container>
  );
};

export default Component;
