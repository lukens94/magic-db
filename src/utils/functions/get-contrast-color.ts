import { POKEMON_HEX_COLORS } from '@/tamagui.config';

export const getContrastColor = (backgroundColor: string): string => {
  const rgb = parseInt(POKEMON_HEX_COLORS[backgroundColor].replace('#', ''), 16);
  const r = (rgb >> 16) & 0xff;
  const g = (rgb >> 8) & 0xff;
  const b = (rgb >> 0) & 0xff;
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  return brightness > 125 ? '$primary800' : '$primary50';
};
