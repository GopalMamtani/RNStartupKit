import React, {Component} from 'react';
import ModuleOneComponent from '../js/Module1/ModuleOneComponent'
class App extends Component { 
  render() {
    return (
        <ModuleOneComponent handleNavigation ={this.props}/>
    );
  }
}

export default App;
