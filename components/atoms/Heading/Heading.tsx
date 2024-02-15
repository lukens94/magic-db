import { StylableComponent } from '@tamagui/web';
import { GetProps, SizableText, styled } from 'tamagui';

export const Heading = styled(SizableText as StylableComponent, {
  name: 'Heading',
  textTransform: 'uppercase',
  color: '$darkLilac',
  fontWeight: '900',
  fontFamily: '$heading',
  size: '$h2',
  allowFontScaling: false,
  variants: {
    variant: {
      light: {
        color: '$primary50',
      },
      dark: {
        color: '$darkLilac',
      },
      boldUppercase: {
        textTransform: 'uppercase',
        fontWeight: '900',
      },
      bold: {
        fontWeight: '900',
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
  } as StylableComponent,
});

export const DisplayHeading = styled(Heading as StylableComponent, {
  name: 'DisplayHeading',
  tag: 'h1',
  size: '$display',
});

export const H1 = styled(Heading as StylableComponent, {
  name: 'H1',
  tag: 'h1',
  size: '$h1',
});

export const H2 = styled(Heading as StylableComponent, {
  name: 'H2',
  tag: 'h2',
  size: '$h2',
});

export const H3 = styled(Heading as StylableComponent, {
  name: 'H3',
  tag: 'h3',
  size: '$h3',
});

export const H4 = styled(Heading as StylableComponent, {
  name: 'H4',
  tag: 'h4',
  size: '$h4',
});

export const H5 = styled(Heading as StylableComponent, {
  name: 'H5',
  tag: 'h5',
  size: '$h5',
});

export type HeadingProps = GetProps<typeof Heading>;
