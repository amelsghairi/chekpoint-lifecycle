import React ,{Component} from 'react';
  

class App extends Component {
  componentDidMount(){
    setTimeout = () =>
    { alert("Hello message"); }, 2000;
  }
  
  componentWillUnmount(){
    alert("Goodbye")
  }

  
  
  
  render (){
    return (
      <div className="App">
       
      </div>
    );
    }
 
}

export default App;
