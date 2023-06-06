import React from 'react';
import { Button, View } from 'react-native';

export type ButtonProps = {
  label: string;
};

export const ButtonComponent = (props: ButtonProps) => {
  return (
    <View>
      <Button title={props.label} />
    </View>
  );
};
