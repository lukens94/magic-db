import { SvgProps } from 'react-native-svg';

import { SVG_ICONS } from '@/src/components/atoms/Icons/Icons';

export type IconProps = {
  name: keyof typeof SVG_ICONS;
} & SvgProps;
