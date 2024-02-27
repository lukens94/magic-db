import { StylableComponent } from '@tamagui/web';
import { styled, View, withStaticProperties } from 'tamagui';

import { ButtonProps } from '@/src/components/atoms/Button/Button.props';
import { Text, TextProps } from '@/src/components/atoms/Text/Text';
import { getContrastColor } from '@/src/utils/functions/get-contrast-color';

export const ButtonFrame = styled(View as StylableComponent, {
  name: 'ButtonFrame',
  alignItems: 'center',
  borderWidth: 1,
  borderColor: 'transparent',
  justifyContent: 'center',
  borderRadius: 50,
  h: 42,
  px: 9.5,
  w: '100%',
  flexDirection: 'row',
  hoverStyle: {
    opacity: 0.7,
  },
  pressStyle: {
    opacity: 0.7,
  },
  variants: {
    variant: (type: 'solid' | 'outlined' | 'category', { props }) =>
      ({
        solid: {
          backgroundColor: props.disabled ? '$primary200' : '$primary800',
        },
        outlined: {
          backgroundColor: 'transparent',
          borderColor: props.disabled ? '$primary200' : '$primary800',
          borderWidth: 3,
        },
        category: {
          backgroundColor: props.disabled ? '$primary500' : `$${props.type}`,
        },
      })[type],
  } as const,
});

export const ButtonText = styled(Text as TextProps, {
  name: 'ButtonText',
  color: '$color',
  fontSize: '$bodyL',
  lineHeight: '$bodyL',
  fontFamily: '$body',
  fontWeight: 700,
  userSelect: 'none',
  textTransform: 'capitalize',
  variants: {
    variant: (type: 'solid' | 'outlined' | 'category', { props }) =>
      ({
        solid: {
          color: props.disabled ? '$primary500' : '$primary50',
        },
        outlined: {
          color: props.disabled ? '$primary200' : '$primary800',
        },
        category: {
          color: props.disabled
            ? '$primary500'
            : type === 'category' && getContrastColor(props.type),
        },
      })[type],
  } as const,
});

const CustomButton = withStaticProperties(ButtonFrame, {
  Text: ButtonText,
});

export const Button = ({
  text,
  disabled = false,
  children,
  variant = 'solid',
  type,
  ...rest
}: ButtonProps) => (
  <CustomButton type={type} disabled={disabled} variant={variant} {...rest}>
    <CustomButton.Text
      type={type}
      allowFontScaling={false}
      textAlign="center"
      disabled={disabled}
      variant={variant}
      {...text}
    >
      {children}
    </CustomButton.Text>
  </CustomButton>
);
