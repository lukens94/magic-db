import { router } from 'expo-router';
import { YStack } from 'tamagui';

import { Button } from '@/src/components/atoms/Button/Button';
import { Heading } from '@/src/components/atoms/Heading/Heading';

export default function DesignSystem() {
  return (
    <YStack gap={10} height="100%" alignItems="center" padding={40}>
      <Heading>DESIGN SYSTEM</Heading>
      <Button onPress={() => router.push('/design-system/typography' as any)}>Typography</Button>
      <Button onPress={() => router.push('/design-system/iconography' as any)}>Iconography</Button>
      <Button onPress={() => router.push('/design-system/button' as any)}>Button</Button>
      <Button onPress={() => router.push('/design-system/badge' as any)}>Badge</Button>
    </YStack>
  );
}
