import '@tamagui/core/reset.css';
import { LogBox } from 'react-native';

import { Home } from '@/components/organism/Home';

export default function App() {
  LogBox.ignoreAllLogs(true);
  return <Home />;
}
