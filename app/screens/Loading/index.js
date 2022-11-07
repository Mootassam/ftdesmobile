import React, {useEffect} from 'react';
import {ActivityIndicator, View, Text} from 'react-native';

import styles from './styles';

export default function Loading({navigation}) {
  const onProcess = () => {
    setTimeout(() => {
      navigation.replace('Main');
    }, 500);
  };
  useEffect(() => {
    onProcess();
  });

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text>Ftdes Portail</Text>
        <ActivityIndicator
          size="large"
          color="#fff"
          style={{
            marginTop: 20,
          }}
        />
      </View>
    </View>
  );
}
