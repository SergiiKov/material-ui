import React from 'react';
import theme from '../components/ui/theme';

import { ThemeProvider } from '@material-ui/core/styles';
import Header from '../components/ui/header';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
      <Header />
      {[...new Array(120)]
            .map(
              () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
            )
            .join('\n')}
      </ThemeProvider>
    
    </div>
  );
}

export default App;