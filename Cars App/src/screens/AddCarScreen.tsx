import React, {useState} from 'react';
import {Button, TextInput} from 'react-native';
import {RootStackScreenProps} from 'src/navigators';

import Screen from 'src/components/Screen';

import parseUtil from 'src/utils/parseUtil';

type Props = RootStackScreenProps<'AddCar'>;

const AddCarScreen = ({
  navigation,
  route: {
    params: {onAdd},
  },
}: Props) => {
  const [initialPrice, setInitialPrice] = useState<string>();
  const [currentPrice, setCurrentPrice] = useState<string>();
  const [company, setCompany] = useState<string>();

  return (
    <Screen>
      <TextInput
        keyboardType="decimal-pad"
        placeholder="Initial Price"
        value={initialPrice !== undefined ? initialPrice.toString() : undefined}
        onChangeText={setInitialPrice}
      />
      <TextInput
        keyboardType="decimal-pad"
        placeholder="Current Price"
        value={currentPrice !== undefined ? currentPrice.toString() : undefined}
        onChangeText={setCurrentPrice}
      />
      <TextInput
        keyboardType="ascii-capable"
        placeholder="Company"
        value={company !== undefined ? company.toString() : undefined}
        onChangeText={setCompany}
      />
      <Button
        title="Add Car"
        onPress={() => {
          if (
            initialPrice !== undefined &&
            currentPrice !== undefined &&
            !!company
          ) {
            onAdd({
              id: 1,
              initialPrice,
              currentPrice,
              company,
            });
            navigation.goBack();
          }
        }}
      />
    </Screen>
  );
};

export default AddCarScreen;
