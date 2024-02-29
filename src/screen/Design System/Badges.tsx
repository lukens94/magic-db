import { View } from '@tamagui/core';
import { FlatList } from 'react-native';
import { ScrollView } from 'tamagui';

import { Badge } from '@/src/components/atoms/Badge/Badge';
import { DisplayHeading, H1 } from '@/src/components/atoms/Heading/Heading';
import { POKEMON_TYPE } from '@/src/utils/constants/PokemonType';

export const Badges = () => {
  return (
    <ScrollView gap={16} m={10}>
      <DisplayHeading>Badges</DisplayHeading>
      <H1 my={10}>Icon</H1>
      <FlatList
        data={POKEMON_TYPE}
        keyExtractor={(item, index) => index.toString()}
        ItemSeparatorComponent={() => <View height={16} />}
        renderItem={(item) => (
          <Badge variant="icon" icon={item.item} category={item.item.toLowerCase()} />
        )}
      />
      <H1 my={10}>Category</H1>
      <FlatList
        data={POKEMON_TYPE}
        keyExtractor={(item, index) => index.toString()}
        ItemSeparatorComponent={() => <View height={16} />}
        renderItem={(item) => (
          <Badge
            variant="category"
            label={item.item}
            icon={item.item}
            category={item.item.toLowerCase()}
          />
        )}
      />
    </ScrollView>
  );
};
