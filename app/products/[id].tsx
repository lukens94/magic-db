import { Text, View } from '@tamagui/core';
import { useLocalSearchParams } from 'expo-router';

export default function DetailProduct() {
  const { id } = useLocalSearchParams();
  return (
    <View height="100%" justifyContent="center" alignItems="center" backgroundColor="green">
      <Text>Product Id: {id}</Text>
    </View>
  );
}
