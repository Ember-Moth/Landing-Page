export const colors = {
  // 主色 - 明亮蓝
  primary: {
    50: '#E6FAFF',
    100: '#B3F1FF',
    200: '#80E8FF',
    300: '#4DDFFF',
    400: '#1AD6FF',
    500: '#00CDFF', // 主色调
    600: '#00A3CC',
    700: '#007A99',
    800: '#005266',
    900: '#002933',
  },

  // 强调色 - 鲜艳紫
  accent: {
    50: '#F5E6FF',
    100: '#E5B8FF',
    200: '#D58AFF',
    300: '#C55CFF',
    400: '#B52EFF',
    500: '#A500FF', // 主色调
    600: '#8400CC',
    700: '#630099',
    800: '#420066',
    900: '#210033',
  },

  // 背景色 - 深邃黑
  background: {
    50: '#2A2A2A',
    100: '#242424',
    200: '#1E1E1E',
    300: '#181818',
    400: '#121212',
    500: '#0C0C0C', // 主色调
    600: '#080808',
    700: '#040404',
    800: '#020202',
    900: '#000000',
  },

  // 前景色 - 亮白
  foreground: {
    50: '#FFFFFF',
    100: '#FAFAFA',
    200: '#F5F5F5',
    300: '#EBEBEB',
    400: '#DEDEDE',
    500: '#CCCCCC', // 主色调
    600: '#A6A6A6',
    700: '#808080',
    800: '#595959',
    900: '#333333',
  },

  // 功能色 - 成功
  success: {
    50: '#E6FFF4',
    100: '#B3FFE0',
    200: '#80FFCC',
    300: '#4DFFB8',
    400: '#1AFFA3',
    500: '#00FF8F', // 主色调
    600: '#00CC72',
    700: '#009956',
    800: '#006639',
    900: '#00331D',
  },

  // 功能色 - 警告
  warning: {
    50: '#FFF8E6',
    100: '#FFEBB3',
    200: '#FFDE80',
    300: '#FFD14D',
    400: '#FFC41A',
    500: '#FFB700', // 主色调
    600: '#CC9200',
    700: '#996E00',
    800: '#664900',
    900: '#332500',
  },

  // 功能色 - 危险
  danger: {
    50: '#FFE6E6',
    100: '#FFB3B3',
    200: '#FF8080',
    300: '#FF4D4D',
    400: '#FF1A1A',
    500: '#FF0000', // 主色调
    600: '#CC0000',
    700: '#990000',
    800: '#660000',
    900: '#330000',
  },

  // 渐变色
  gradients: {
    // 主要渐变
    primary: 'linear-gradient(135deg, #00CDFF 0%, #A500FF 100%)',
    secondary: 'linear-gradient(135deg, #A500FF 0%, #00CDFF 100%)',
    
    // 背景渐变
    background: 'linear-gradient(to bottom right, #181818, #000000)',
    
    // 发光渐变
    glow: {
      primary: 'radial-gradient(circle at center, rgba(0,205,255,0.15), transparent 70%)',
      accent: 'radial-gradient(circle at center, rgba(165,0,255,0.15), transparent 70%)',
    },
  },

  // 特殊效果色
  effects: {
    glow: {
      primary: 'rgba(0, 205, 255, 0.5)',
      accent: 'rgba(165, 0, 255, 0.5)',
    },
    glass: {
      light: 'rgba(255, 255, 255, 0.05)',
      dark: 'rgba(0, 0, 0, 0.3)',
    },
    overlay: {
      light: 'rgba(255, 255, 255, 0.03)',
      dark: 'rgba(0, 0, 0, 0.7)',
    },
  },
};

// 导出类型定义
export type ColorPalette = typeof colors;
export type ColorShade = keyof typeof colors.primary;
export type ColorName = keyof typeof colors; 