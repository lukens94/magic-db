import { View } from '@tamagui/core';
import { StylableComponent } from '@tamagui/web';
import { styled, XStack } from 'tamagui';

import { BadgeProps } from '@/src/components/atoms/Badge/Badge.props';
import { Icon } from '@/src/components/atoms/Icon/Icon';
import { Text } from '@/src/components/atoms/Text/Text';
import { getContrastColor } from '@/src/utils/functions/get-contrast-color';

export const StyledBadge = styled(XStack as StylableComponent, {
  alignItems: 'center',
  borderRadius: 50,
  px: 8,
  py: 4,
  variants: {
    variant: (type: 'category' | 'icon', { props }) =>
      ({
        category: {
          backgroundColor: `$${props.category}`,
          marginRight: 'auto',
        },
        icon: {
          backgroundColor: `$${props.category}`,
          width: 'full',
          justifyContent: 'center',
        },
      })[type],
  } as const,
});

export const Badge = ({ label, category, icon, variant }: BadgeProps) => {
  return (
    <StyledBadge variant={variant} category={category}>
      <View backgroundColor="$primary50" borderRadius={100} p={5}>
        <Icon name={icon} height={22} width={22} />
      </View>
      {label && (
        <Text ml={5} size="$bodyL" variant="bold" color={getContrastColor(category as string)}>
          {label}
        </Text>
      )}
    </StyledBadge>
  );
};
