import { router } from 'expo-router';
import { Button, YStack } from 'tamagui';

import { Heading } from '@/components/atoms/Heading/Heading';

export const Home = () => {
  return (
    <YStack gap={10} backgroundColor="$primary800" height="100%" alignItems="center" padding={40}>
      <Heading>HOME PAGE</Heading>
      <Button
        color="white"
        backgroundColor="#5C5D8D"
        onPress={() => router.push('/design-system' as any)}
      >
        Design System
      </Button>
    </YStack>
  );
};
