import defaultTheme, { commonColorsPalette } from './default';
import { GrafanaThemeType, GrafanaTheme } from '@grafana/data';

const basicColors = {
  ...commonColorsPalette,
  black: '#000000',
  white: '#ffffff',
  dark1: '#141414',
  dark2: '#161719',
  dark3: '#1f1f20',
  dark4: '#212124',
  dark5: '#222426',
  dark6: '#262628',
  dark7: '#292a2d',
  dark8: '#2f2f32',
  dark9: '#343436',
  dark10: '#424345',
  gray1: '#555555',
  gray2: '#8e8e8e',
  gray3: '#b3b3b3',
  gray4: '#d8d9da',
  gray5: '#ececec',
  gray6: '#f4f5f8', // not used in dark theme
  gray7: '#fbfbfb', // not used in dark theme
  blueBase: '#3274d9',
  blueShade: '#1f60c4',
  blueLight: '#5794f2',
  blueFaint: '#041126',
  redBase: '#e02f44',
  redShade: '#c4162a',
  greenBase: '#299c46',
  greenShade: '#23843b',
  blue: '#33b5e5',
  red: '#d44a3a',
  yellow: '#ecbb13',
  purple: '#9933cc',
  variable: '#32d1df',
  orange: '#eb7b18',
  orangeDark: '#ff780a',
};

const backgrounds = {
  bg1: basicColors.gray10,
  bg2: basicColors.gray15,
  bg3: basicColors.gray25,
  dashboardBg: basicColors.gray05,
};

const borders = {
  border1: basicColors.gray15,
  border2: basicColors.gray25,
};

const form = {
  // Next-gen forms functional colors
  formLabel: basicColors.gray70,
  formDescription: basicColors.gray60,
  formLegend: basicColors.gray85,
  formInputBg: basicColors.gray05,
  formInputBgDisabled: basicColors.gray10,
  formInputBorder: basicColors.gray25,
  formInputBorderHover: basicColors.gray33,
  formInputBorderActive: basicColors.blue95,
  formInputBorderInvalid: basicColors.red88,
  formInputPlaceholderText: basicColors.gray1,
  formInputText: basicColors.gray85,
  formInputDisabledText: basicColors.gray70,
  formInputTextStrong: basicColors.gray85,
  formInputTextWhite: basicColors.white,
  formFocusOutline: basicColors.blueShade,
  formValidationMessageText: basicColors.white,
  formValidationMessageBg: basicColors.red88,
  formSwitchBg: basicColors.gray25,
  formSwitchBgActive: basicColors.blueLight,
  formSwitchBgHover: basicColors.gray33,
  formSwitchBgActiveHover: basicColors.blueBase,
  formSwitchBgDisabled: basicColors.gray25,
  formSwitchDot: basicColors.gray15,
  formCheckboxBg: basicColors.dark5,
  formCheckboxBgChecked: basicColors.blueLight,
  formCheckboxBgCheckedHover: basicColors.blueBase,
  formCheckboxCheckmark: basicColors.gray25,
};

const darkTheme: GrafanaTheme = {
  ...defaultTheme,
  type: GrafanaThemeType.Dark,
  isDark: true,
  isLight: false,
  name: 'Grafana Dark',
  palette: {
    ...basicColors,
    brandPrimary: basicColors.orange,
    brandSuccess: basicColors.greenBase,
    brandWarning: basicColors.orange,
    brandDanger: basicColors.redBase,
    queryRed: basicColors.redBase,
    queryGreen: '#74e680',
    queryPurple: '#fe85fc',
    queryOrange: basicColors.orange,
    online: basicColors.greenBase,
    warn: '#f79520',
    critical: basicColors.redBase,
  },
  colors: {
    ...backgrounds,
    ...borders,
    ...form,

    bodyBg: backgrounds.bg1,
    panelBg: backgrounds.bg1,
    pageHeaderBg: backgrounds.bg2,
    pageHeaderBorder: borders.border1,
    panelBorder: borders.border1,

    dropdownBg: form.formInputBg,
    dropdownShadow: basicColors.black,
    dropdownOptionHoverBg: backgrounds.bg2,

    // text
    headingColor: basicColors.gray4,
    text: basicColors.gray85,
    textStrong: basicColors.white,
    textWeak: basicColors.gray2,
    textEmphasis: basicColors.gray5,
    textFaint: basicColors.dark5,
    textBlue: basicColors.blue85,

    link: basicColors.gray4,
    linkDisabled: basicColors.gray2,
    linkHover: basicColors.white,
    linkExternal: basicColors.blue,
  },
};

export default darkTheme;
