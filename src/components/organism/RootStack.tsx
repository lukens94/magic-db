import { NativeStackNavigationOptions } from '@react-navigation/native-stack';
import { Stack } from 'expo-router';

import { HeaderNavigation } from '@/src/components/organism/navigators/HeaderNavigation';

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
          header: () => <HeaderNavigation />,
        }}
      />
      <Stack.Screen name="products" options={{ headerShown: false }} />
    </Stack>
  );
}
