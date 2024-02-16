import { useRoute } from '@react-navigation/core';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { XStack } from 'tamagui';

import { Text } from '@/src/components/atoms/Text/Text';

export const HeaderNavigation = () => {
  const { top } = useSafeAreaInsets();

  const route = useRoute();
  console.log(route.name);

  return (
    <XStack px={16} pt={top + 8} pb={8} bg="$darkLilac">
      <Text colorVariant="light">Header</Text>
    </XStack>
  );
};
