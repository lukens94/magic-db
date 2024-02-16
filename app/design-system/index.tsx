import { router } from 'expo-router';
import { Button, YStack } from 'tamagui';

import { Heading } from '@/src/components/atoms/Heading/Heading';

export default function DesignSystem() {
  return (
    <YStack gap={10} backgroundColor="$primary800" height="100%" alignItems="center" padding={40}>
      <Heading>DESIGN SYSTEM</Heading>
      <Button
        color="white"
        backgroundColor="#5C5D8D"
        onPress={() => router.push('/design-system/typography' as any)}
      >
        Typography
      </Button>
    </YStack>
  );
}
