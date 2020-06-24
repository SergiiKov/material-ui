import React from 'react';
import theme from '../components/ui/theme';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import Header from '../components/ui/header';


function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path = '/' component={()=> <div>home</div>} />
          <Route exact path = '/services' component={()=> <div>services</div>} />
          <Route exact path = '/theRevolutions' component={()=> <div>The Revolutions</div>} />
          <Route exact path = '/aboutUs' component={()=> <div>About Us</div>} />
          <Route exact path = '/contactUs' component={()=> <div>Contact Us</div>} />
        </Switch>
        </BrowserRouter>
    
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
