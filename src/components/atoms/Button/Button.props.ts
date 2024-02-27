import { ReactElement } from 'react';
import { GetProps, ParagraphProps } from 'tamagui';

import { ButtonFrame } from '@/src/components/atoms/Button/Button';
import { PokemonType } from '@/src/types/pokemon-type';

type ButtonFrameProps = GetProps<typeof ButtonFrame>;

export type ButtonProps = {
  children: ReactElement | ReactElement[] | string;
  text?: ParagraphProps;
  disabled?: boolean;
  type?: PokemonType;
} & ButtonFrameProps;
