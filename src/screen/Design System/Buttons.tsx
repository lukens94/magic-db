import { FlatList } from 'react-native';
import { View } from 'tamagui';

import { Button } from '@/src/components/atoms/Button/Button';
import { DisplayHeading } from '@/src/components/atoms/Heading/Heading';
import { POKEMON_TYPE } from '@/src/utils/constants/PokemonType';

export const Buttons = () => {
  return (
    <View gap={16} m={10} mb={100}>
      <DisplayHeading>Button</DisplayHeading>
      <FlatList
        ListHeaderComponent={() => (
          <View gap={16} mb={16}>
            <Button>Solid</Button>
            <Button disabled>Disabled</Button>
            <Button variant="outlined">Outlined</Button>
            <Button disabled variant="outlined">
              Outlined disabled
            </Button>
          </View>
        )}
        data={POKEMON_TYPE}
        keyExtractor={(item, index) => index.toString()}
        ItemSeparatorComponent={() => <View height={16} />}
        renderItem={(item) => (
          <Button variant="category" type={item.item.toLowerCase()}>
            {item.item}
          </Button>
        )}
      />
    </View>
  );
};
