import React, { ComponentType } from "react";

import { useTheme } from ".";

export function withTheme(Component: ComponentType<any>) {
  var theme = useTheme();
  return (props) => {
    return <Component theme={theme} {...props} />;
  };
}
