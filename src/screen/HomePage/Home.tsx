import { router } from 'expo-router';
import { YStack } from 'tamagui';

import { Button } from '@/src/components/atoms/Button/Button';
import { Heading } from '@/src/components/atoms/Heading/Heading';

export const Home = () => {
  return (
    <YStack gap={10} height="100%" alignItems="center" padding={40}>
      <Heading>HOME PAGE</Heading>
      <Button onPress={() => router.push('/design-system' as any)}>Design System</Button>
    </YStack>
  );
};
