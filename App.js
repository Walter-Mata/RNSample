import * as React from 'react';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { name as appName } from './app.json';
import Main from './src/Main';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#fff',
    accent:'#000',
    surface:'#808080',
    disabled:'#d3d3d3',
    backdrop:'#fe6670'
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

