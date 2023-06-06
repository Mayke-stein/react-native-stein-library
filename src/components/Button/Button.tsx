import React from 'react';
import { Button, View } from 'react-native';

type ButtonProps = {
  label: string;
};

const ButtonComponent = (props: ButtonProps) => {
  return (
    <View>
      <Button title={props.label} />
    </View>
  );
};

export default ButtonComponent;
