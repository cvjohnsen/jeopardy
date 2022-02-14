import { Component } from "react";

class Score extends Component{
    state= {
        score: 0    
    }

handleIncrease = () => {
    this.setState({score : this.state.score + this.props.scr.value})
  }

  handleDecrease = ()=> {
    this.setState({score : this.state.score - this.props.scr.value})
  }

  handleReset = ()=> {
    this.setState({score : this.state.score = 0})
  }
     
    render(){
        return(
            <div className="score">
      <h2>Score: {this.state.score}</h2>
      <button onClick={this.handleIncrease}>Increase</button>
       <button onClick= {this.handleDecrease}>Decrease</button>
       <button onClick= {this.handleReset}>Reset</button>

    </div> 
  
        )
    }
}


export default Score;