import React from 'react';

import Button from 'src/components/Button';
import Screen from 'src/components/Screen';

const Dashboard = () => (
  <Screen>
    <Button
      text="Dashboard Button"
      onPress={() => {
        console.log('Pressed');
      }}
    />
  </Screen>
);

export default Dashboard;
