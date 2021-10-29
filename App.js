import * as React from 'react';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { name as appName } from './app.json';
import Main from './src/Main';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#fff',
    secondary:'#000',
    tertiary:'#808080',
    fourth:'#d3d3d3'
  },
};


 const App =()=> {
  return (
    <PaperProvider theme={theme}>
      <Main />
    </PaperProvider>
  );
}
export default App;

