import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { TamaguiInternalConfig, TamaguiProvider } from 'tamagui';

import RootStack from '@/components/organism/RootStack';
import tamaguiConfig from '@/tamagui.config';

export default function RootLayout() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <TamaguiProvider config={tamaguiConfig as TamaguiInternalConfig}>
        <SafeAreaProvider>
          <RootStack />
        </SafeAreaProvider>
      </TamaguiProvider>
    </QueryClientProvider>
  );
}
