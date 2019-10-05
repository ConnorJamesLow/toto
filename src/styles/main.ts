import { StyleSheet } from 'react-native';
import darkThemeStyles, { DARK_THEME } from './themes/dark';

const createStyleSheet = (theme: any) => StyleSheet.create({
  baseView: {
    flex: 1,
    backgroundColor: theme.background.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    backgroundColor: theme.input.background || theme.background.primary,
    borderBottomColor: theme.input.borderColor || theme.background.secondary,
    color: theme.input.color || theme.color.primary,
    borderBottomWidth: theme.useInputBorders ? 1 : 0,
    paddingHorizontal: 8,
    fontFamily: 'open-sans'
  },
  outerEditor: {
    height: '100%',
    width: '95%',
    paddingVertical: 24,
    paddingHorizontal: 16,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerEditor: {
    height: 64,
    width: '100%'
  }
});

export const getTheme = (name: string) => {
  switch (name) {
    case DARK_THEME:
    default:
      return createStyleSheet(darkThemeStyles);
  }
};

export const themes = {
  DARK_THEME
};

