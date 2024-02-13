import '../tamagui-web.css';
import { DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { TamaguiProvider } from 'tamagui';
import tamaguiConfig from '@/tamagui.config';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import RootStack from '@/components/organism/RootStack';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

export default function RootLayout() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <TamaguiProvider config={tamaguiConfig}>
        <ThemeProvider value={DefaultTheme}>
          <SafeAreaProvider>
            <RootStack />
          </SafeAreaProvider>
        </ThemeProvider>
      </TamaguiProvider>
    </QueryClientProvider>
  );
}
