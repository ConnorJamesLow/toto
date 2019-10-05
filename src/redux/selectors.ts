import { getTheme as getThemeStyles } from '../styles/main';

export const getTheme = store => getThemeStyles(store.theme);