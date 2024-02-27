import { Stack } from 'expo-router';

import { SCREEN_PATH } from '@/src/utils/constants/ScreenPath';

export const AppNavigator = () => {
  return (
    <Stack>
      {SCREEN_PATH.map((url, index) => (
        <Stack.Screen key={index} name={url} />
      ))}
    </Stack>
  );
};
