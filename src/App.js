import React from 'react';
import axios from 'axios';
import Card from "./Card/Card"
import './App.css';


class App extends React.Component{

  state = {advice:" What ever the work may me, We have to give our best . . . "}
  



fetchAdvice = () => {
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
