import React from 'react';
import theme from '../components/ui/theme';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import Header from '../components/ui/header';
import Contact from '../components/ui/contact';


function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <BrowserRouter>
        <Header />
        <Contact />
        {/* <Switch>
          <Route exact path = '/' component={()=> <div>home</div>} />
          <Route exact path = '/services' component={()=> <div>services</div>} />
          <Route exact path = '/theRevolutions' component={()=> <div>The Revolutions</div>} />
          <Route exact path = '/aboutUs' component={()=> <div>About Us</div>} />
          <Route exact path = '/contactUs' component={()=> <div>Contact Us</div>} />
        </Switch> */}
        </BrowserRouter>
    
      
      </ThemeProvider>
    
    </div>
  );
}

export default App;
