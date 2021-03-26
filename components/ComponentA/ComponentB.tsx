import React from "react";
import { Text, View } from "../Themed";
import { withTheme } from "@core/withTheme";
import { ComponentA } from ".";

export const MyComponentBWithTheme = withTheme(ComponentB);


function ComponentB() {
  return (
    <View>
      <ComponentA />
      <Text>I should render</Text>
    </View>
  );
}
