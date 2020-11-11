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
    link: '#33FF99',
    info: '#33FF99',
    warn: '#FFB140',
    alert: '#FF2E00',
    primary: '#33FF99'
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
    link: '#33FF99',
    info: '#33FF99',
    warn: '#FFB140',
    alert: '#FF2E00',
    primary: '#33FF99'
  },
};

export { lightTheme, darkTheme };
