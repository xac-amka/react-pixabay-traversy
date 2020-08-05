import React, { Component, Fragment } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Navbar from './components/NavBar';
import Search from './components/Search';

class App extends Component {

  render(){
    return(
      <MuiThemeProvider>
         <Fragment>
           <Navbar />
           <Search />
         </Fragment>
      </MuiThemeProvider>
    )
  }
}

export default App;
