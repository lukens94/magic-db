import { Stack, useGlobalSearchParams } from 'expo-router';

import { optionsHeader } from '@/src/components/organism/RootStack';

export default function ProductLayout() {
  const { id } = useGlobalSearchParams();

  return (
    <Stack>
      <Stack.Screen name="index" options={{ ...optionsHeader, headerTitle: 'Prodotti' }} />
      <Stack.Screen
        name="[id]"
        options={{
          ...optionsHeader,
          headerTitle: `${id}`,
        }}
      />
    </Stack>
  );
}
