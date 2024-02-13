import { View } from '@tamagui/core';
import { router } from 'expo-router';
import { StyleSheet } from 'react-native';
import { Button, H1 } from 'tamagui';

const styles = StyleSheet.create<any>({
  container: {
    flex: 1,
    backgroundColor: '#D8F1A0',
    padding: 20,
  },
  box: {
    flex: 1,
    backgroundColor: '#F3C178',
    borderWidth: 5,
    borderColor: 'black',
    borderRadius: 20,
    borderStyle: 'solid',
    padding: 10,
  },
});

export const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box} alignItems="center" gap={50}>
        <H1>Home</H1>
        <Button
          size="$6"
          color="white"
          backgroundColor="#5C5D8D"
          onPress={() => router.push('/products' as any)}
        >
          Go to Product list
        </Button>
      </View>
    </View>
  );
};
