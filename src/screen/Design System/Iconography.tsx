import { FlatList } from 'react-native';
import { View } from 'tamagui';

import { DisplayHeading } from '@/src/components/atoms/Heading/Heading';
import { Icon } from '@/src/components/atoms/Icon/Icon';
import { POKEMON_TYPE } from '@/src/utils/constants/PokemonType';

export const Iconography = () => {
  return (
    <View gap={10} m={10}>
      <DisplayHeading>Iconography</DisplayHeading>
      <FlatList
        data={POKEMON_TYPE}
        keyExtractor={(item, index) => index.toString()}
        renderItem={(item) => <Icon name={item.item} width={50} height={50} />}
        horizontal
      />
    </View>
  );
};
