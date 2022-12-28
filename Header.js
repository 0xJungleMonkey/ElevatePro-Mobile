import React from "react";
import { useTheme, Appbar, TouchableRipple, Switch } from "react-native-paper";
import { PreferencesContext } from "./PreferencesContext";

export function Header({ navigation, back, title }) {
  const theme = useTheme();
  const { toggleTheme, isThemeDark } = React.useContext(PreferencesContext);

  return (
    <Appbar.Header
      theme={{
        colors: {
          primary: theme?.colors.surface,
        },
      }}
    >
      {back ? <Appbar.BackAction onPress={navigation.goBack} /> : null}

      <Appbar.Content title={title} />
      <Switch color={"red"} value={isThemeDark} onValueChange={toggleTheme} />
    </Appbar.Header>
  );
}
