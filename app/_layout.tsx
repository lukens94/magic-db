import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useFonts } from 'expo-font';
import { SplashScreen } from 'expo-router';
import { useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { TamaguiInternalConfig, TamaguiProvider } from 'tamagui';

import { AppNavigator } from '@/src/navigators/AppNavigator';
import tamaguiConfig from '@/tamagui.config';

export default function RootLayout() {
  const queryClient = new QueryClient();

  const [fontsLoaded] = useFonts({
    'BigShouldersDisplay-Black': require('../assets/fonts/BigShouldersDisplay-Black.ttf'),
    'AccordAlternate-Regular': require('../assets/fonts/AccordAlternate-Regular.ttf'),
    'AccordAlternate-Bold': require('../assets/fonts/AccordAlternate-Bold.ttf'),
    'AccordAlternate-BoldItalic': require('../assets/fonts/AccordAlternate-BoldItalic.ttf'),
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <QueryClientProvider client={queryClient}>
        <TamaguiProvider config={tamaguiConfig as TamaguiInternalConfig}>
          <AppNavigator />
        </TamaguiProvider>
      </QueryClientProvider>
    </SafeAreaProvider>
  );
}
