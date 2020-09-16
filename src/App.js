import React from 'react';
import axios from 'axios';
import Card from "./Card/Card"
import './App.css';
import ParticlesBg from 'particles-bg'

class App extends React.Component{

  state = {advice:""}
  

componentDidMount(){
  this.fetchAdvice();
}

fetchAdvice = async() => {
  axios.get ('https://api.adviceslip.com/advice')
  .then((res)=> {
    const {advice} = res.data.slip;
    this.setState({
      advice:advice,
    })
  })
  .catch((err)=> {
    console.log(err)
  })
}

  
render(){
  return (
    <div className="App">
      <Card  advice={this.state.advice}
      onClick={this.fetchAdvice}
      />
     
    </div>
  );
}
}

export default App;
