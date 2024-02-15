import { config } from '@tamagui/config/v3';
import { shorthands } from '@tamagui/shorthands';
import { themes, tokens } from '@tamagui/themes';
import { createFont, createTamagui, CreateTamaguiProps } from 'tamagui';

const headingFont = createFont({
  family: 'BigShouldersDisplay-Black',
  color: {
    true: '$darkLilac',
  },
  size: {
    true: 28,
    display: 48,
    h1: 32,
    h2: 28,
    h3: 24,
    h4: 20,
    h5: 16,
  },
  lineHeight: {
    true: 30,
    display: 52,
    h1: 34,
    h2: 30,
    h3: 28,
    h4: 24,
    h5: 18,
  },
  weight: {
    true: 900,
  },
  letterSpacing: {
    true: 0,
  },
  transform: {
    true: 'uppercase',
  },
  face: {
    900: { normal: 'BigShouldersDisplay-Black', bold: 'BigShouldersDisplay-Black' },
  },
});

const bodyFont = createFont({
  family: 'AccordAlternate-Regular',
  color: {
    true: '$darkLilac',
  },
  size: {
    true: 16,
    bodyL: 16,
    bodyM: 14,
    bodyS: 12,
    display: 48,
    h1: 32,
    h2: 28,
    h3: 24,
    h4: 20,
    h5: 16,
  },
  lineHeight: {
    true: 20,
    bodyL: 20,
    bodyM: 18,
    bodyS: 14,
  },
  weight: {
    true: 400,
  },
  letterSpacing: {
    true: 0,
  },
  face: {
    400: { normal: 'AccordAlternate-Regular', bold: 'AccordAlternate-Regular' },
    700: {
      normal: 'AccordAlternate-Bold',
      bold: 'AccordAlternate-Bold',
      italic: 'AccordAlternate-BoldItalic',
    },
  },
});

export const LBA_HEX_COLORS = {
  darkGold: '#888654',
  darkLilac: '#1F1F3C',
  darkOrange: '#2A0000',
  gold: '#CECB9D',
  lilac: '#6B6BA4',
  orange: '#BA5822',
  yellow: '#EDA52B',
  primary50: '#FFFFFF',
  primary400: '#FAFAFA',
  primary500: '#F2F2F2',
  primary600: '#E5E5E5',
  primary700: '#CCCCCC',
  primary800: '#808080',
  primary900: '#000000',
  secondaryGreen500: '#489B78',
  secondaryGreen800: '#003916',
  secondaryRed500: '#E70E19',
  secondaryRed800: '#851300',
  informative: '#6B6BA4',
  negative: '#E70E19',
  neutral: '#000000',
  positive: '#489B78',
  warning: '#EDA52B',
  gamificationLightOrange: '#FFA573',
  gamificationLightBlue: '#64AFFF',
  gamificationLightPurple: '#F683F9',
  gamificationLightCyan: '#D0E8FF',
  gamificationLightRose: '#F2E0FF',
  gamificationLightGreen: '#D7F3DF',
  gamificationDarkOrange: '#FF985F',
  gamificationDarkBlue: '#5BA8FA',
  gamificationDarkPurple: '#F371F6',
  gamificationDarkCyan: '#A2D2FF',
  gamificationDarkRose: '#E2BEFF',
  gamificationDarkGreen: '#A9E4BA',
  goldAlpha20: 'rgba(206,203,157,0.2)',
};

const tamaguiConfig = createTamagui({
  ...config,
  shorthands,
  themes,
  fonts: {
    heading: headingFont,
    body: bodyFont,
  },
  tokens: {
    ...tokens,
    color: { ...LBA_HEX_COLORS },
  },
} as CreateTamaguiProps);

export type Conf = typeof tamaguiConfig;
declare module 'tamagui' {
  interface TamaguiCustomConfig extends Conf {}
}

export default tamaguiConfig;
