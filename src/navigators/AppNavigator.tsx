import { Stack } from 'expo-router';

import { HeaderNavigation } from '@/src/components/organism/navigators/HeaderNavigation';
import { SCREEN_PATH } from '@/src/utils/constants/ScreenPath';

export const AppNavigator = () => {
  return (
    <Stack>
      {SCREEN_PATH.map((url, index) => (
        <Stack.Screen
          key={index}
          name={url}
          options={{
            header: () => <HeaderNavigation />,
          }}
        />
      ))}
    </Stack>
  );
};
