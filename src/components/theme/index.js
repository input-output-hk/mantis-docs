const baseTheme = {
  fonts: {
    mono: '"SF Mono", "Roboto Mono", Menlo, monospace',
  },
};

const lightTheme = {
  ...baseTheme,
  label: 'light',
  colors: {
    background: '#fff',
    panelBackground: 'rgba(0, 0, 0, 0.05)',
    accent: 'rgba(0, 0, 0, 0.1)',
    heading: '#000',
    text: '#3B454E',
    preFormattedText: 'rgb(245, 247, 249)',
    link: '#3A86FF',
    info: '#3A86FF',
    warn: '#FFBE0B',
    alert: '#FB5607',
    primary: 'rgba(58,134,255,1)'
  },
};

const darkTheme = {
  ...baseTheme,
  label: 'dark',
  colors: {
    background: '#1d1e21',
    panelBackground: 'rgba(255, 255, 255, 0.1)',
    accent: 'rgba(255, 255, 255, 0.2)',
    heading: '#fff',
    text: '#fff',
    preFormattedText: '#000',
    link: '#8338EC',
    info: '#8338EC',
    warn: '#FFBE0B',
    alert: '#FB5607',
    primary: 'rgba(131,56,236,1)'
  },
};

export { lightTheme, darkTheme };
