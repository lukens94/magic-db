import { GetProps } from 'tamagui';

import { StyledBadge } from '@/src/components/atoms/Badge/Badge';
import { SVG_ICONS } from '@/src/components/atoms/Icons/Icons';
import { PokemonType } from '@/src/types/pokemon-type';

type StyledBadgeProps = GetProps<typeof StyledBadge>;

export type BadgeProps = {
  label: string;
  category?: PokemonType;
  icon: keyof typeof SVG_ICONS;
} & StyledBadgeProps;
