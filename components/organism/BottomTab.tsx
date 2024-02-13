import { router } from "expo-router";
import { Tabs } from "tamagui";
import { Text } from "@tamagui/core";
import { useState } from "react";

export const BottomTab = () => {
  const [linkTab, setLinkTab] = useState<string>("/");
  return (
    <Tabs
      value={linkTab}
      justifyContent="center"
      backgroundColor="#654F6F"
      onValueChange={(prev) => {
        setLinkTab(prev);
        router.replace(prev as any);
      }}
      padding={10}
      width="100%"
    >
      <Tabs.List gap={10}>
        <Tabs.Tab value="/" borderRadius={10} backgroundColor="#99A1A6">
          <Text>Home</Text>
        </Tabs.Tab>
        <Tabs.Tab value="/products" borderRadius={10} backgroundColor="#99A1A6">
          <Text>Product List</Text>
        </Tabs.Tab>
      </Tabs.List>
    </Tabs>
  );
};
