import React from 'react';
import { View, TextInput } from 'react-native';

type InputProps = {
  placeholder: string;
};

const InputComponent = (props: InputProps) => {
  return (
    <View>
      <TextInput placeholder={props.placeholder} />
    </View>
  );
};

export default InputComponent;
