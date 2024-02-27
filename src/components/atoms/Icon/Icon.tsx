import { Fragment } from 'react';

import { IconProps } from '@/src/components/atoms/Icon/Icon.props';
import { SVG_ICONS } from '@/src/components/atoms/Icons/Icons';

export const Icon = ({ name, ...rest }: IconProps) => {
  const Component = name ? SVG_ICONS[name as keyof typeof SVG_ICONS] : Fragment;
  if (!Component) return <></>;

  return <Component {...rest} />;
};
