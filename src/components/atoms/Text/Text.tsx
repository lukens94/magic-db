import { GetProps, Paragraph, styled } from 'tamagui';

export const Text = styled(Paragraph as TextProps, {
  name: 'Text',
  tag: 'p',
  userSelect: 'none',
  color: '$primary800',
  size: '$bodyM',
  allowFontScaling: false,
  variants: {
    disabled: {
      true: {
        pointerEvents: 'none',
        color: '$primary600',
        borderColor: '$primary600',
      },
    },
    invalid: {
      true: {
        color: '$primaryRed',
        borderColor: '$primaryRed',
        focusStyle: {
          borderColor: '$primaryRed',
          color: '$primaryRed',
        },
      },
    },
    colorVariant: (type: 'light' | 'dark') =>
      ({
        light: {
          color: '$primary50',
        },
        dark: {
          color: '$darkLilac',
        },
      })[type],
    variant: (type: 'boldUppercase' | 'bold' | 'uppercase' | 'interactive') =>
      ({
        boldUppercase: {
          textTransform: 'uppercase',
          fontWeight: '700',
        },
        bold: {
          fontWeight: '700',
        },
        uppercase: {
          textTransform: 'uppercase',
          fontWeight: '400',
        },
        interactive: {
          textDecorationLine: 'underline',
        },
      })[type],
  } as const,
});

export type TextProps = GetProps<typeof Text>;
