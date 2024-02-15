import { YStack } from 'tamagui';

import { DisplayHeading, H1, H2, H3, H4, H5, Heading } from '@/components/atoms/Heading/Heading';
import { Text } from '@/components/atoms/Text/Text';

export const Typography = () => {
  return (
    <YStack gap={10}>
      <DisplayHeading>Display Heading</DisplayHeading>
      <H1>Heading 1</H1>
      <H2>Heading 2</H2>
      <H3>Heading 3</H3>
      <H4>Heading 4</H4>
      <H5>Heading 5</H5>
      <Heading>Heading</Heading>
      <Text size="$bodyL">Body L</Text>
      <Text size="$bodyL" variant="boldUppercase">
        Body L Bold Uppercase
      </Text>
      <Text size="$bodyL" variant="bold">
        Body L Bold
      </Text>
      <Text size="$bodyL" variant="uppercase">
        Body L Uppercase
      </Text>
      <Text size="$bodyL" variant="interactive">
        Body L Interactive
      </Text>
      <Text>Body M</Text>
      <Text variant="boldUppercase">Body M Bold Uppercase</Text>
      <Text variant="bold">Body M Bold</Text>
      <Text variant="uppercase">Body M Uppercase</Text>
      <Text variant="interactive">Body M Interactive</Text>
      <Text size="$bodyS">Body S</Text>
      <Text size="$bodyS" variant="boldUppercase">
        Body S Bold Uppercase
      </Text>
      <Text size="$bodyS" variant="bold">
        Body S Bold
      </Text>
      <Text size="$bodyS" variant="uppercase">
        Body S Uppercase
      </Text>
      <Text size="$bodyS" variant="interactive">
        Body S Interactive
      </Text>
    </YStack>
  );
};
