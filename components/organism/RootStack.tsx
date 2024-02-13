import { Stack } from 'expo-router';
import { NativeStackNavigationOptions } from '@react-navigation/native-stack';

export const optionsHeader: NativeStackNavigationOptions = {
  headerStyle: {
    backgroundColor: '#654F6F',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
};

export default function RootStack() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          ...optionsHeader,
          headerTitle: 'Home page',
        }}
      />
      <Stack.Screen name="products" options={{ headerShown: false }} />
    </Stack>
  );
}
