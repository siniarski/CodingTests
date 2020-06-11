import {v4 as uuidv4} from 'uuid';
import React, {useState} from 'react';
import {Button} from 'react-native';
import {RootStackScreenProps} from 'src/navigators';

import Screen from 'src/components/Screen';
import Input from 'src/components/Input';

import parseUtil from 'src/utils/parseUtil';
import validationUtil from 'src/utils/validationUtil';
import {color} from 'src/styles';

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

  const handleNumberChange = (setString: (text: string) => void) => (
    text: string,
  ) => {
    if (validationUtil.isFloatString(text)) {
      setString(text);
    }
  };

  return (
    <Screen>
      <Input
        keyboardType="decimal-pad"
        placeholder="Initial Price"
        value={initialPrice}
        onChangeText={handleNumberChange(setInitialPrice)}
      />
      <Input
        keyboardType="decimal-pad"
        placeholder="Current Price"
        value={currentPrice}
        onChangeText={handleNumberChange(setCurrentPrice)}
      />
      <Input
        keyboardType="ascii-capable"
        placeholder="Company"
        value={company}
        onChangeText={setCompany}
      />
      <Button
        title="Add Car"
        color={color.secondary}
        onPress={() => {
          const initialPriceNumber = parseUtil.getFloat(initialPrice);
          const currentPriceNumber = parseUtil.getFloat(currentPrice);

          if (
            initialPriceNumber !== undefined &&
            currentPriceNumber !== undefined &&
            !!company
          ) {
            onAdd({
              id: uuidv4(),
              initialPrice: initialPriceNumber,
              currentPrice: currentPriceNumber,
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
