import { StylableComponent } from '@tamagui/web';
import { GetProps, Paragraph, styled } from 'tamagui';

export const Text = styled(Paragraph as StylableComponent, {
  name: 'Text',
  tag: 'p',
  userSelect: 'none',
  color: '$darkLilac',
  size: '$bodyM',
  allowFontScaling: false,
  variants: {
    disabled: {
      true: {
        pointerEvents: 'none',
        color: '$primary700',
        borderColor: '$primary700',
      },
    },
    invalid: {
      true: {
        color: '$negative',
        borderColor: '$negative',
        focusStyle: {
          borderColor: '$negative',
          color: '$negative',
        },
      },
    },
    colorVariant: {
      light: {
        color: '$primary50',
      },
      dark: {
        color: '$darkLilac',
      },
    },
    variant: {
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
    },
  } as StylableComponent,
  defaultVariants: {
    colorVariant: 'dark',
  } as StylableComponent,
});

export type TextProps = GetProps<typeof Text>;
