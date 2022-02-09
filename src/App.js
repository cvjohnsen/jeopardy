
import { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    data: null,
    question:'',
    value: '',
    answer: '',
    category: '',
    point: '',
    isHidden: true,
    count:0
  }

  handleOnClick= async () => {
    try {
      const response = await fetch("http://jservice.io/api/random");
      const data = await response.json();
      this.setState({data: data[0]})
    } catch (err) {
        console.error(err)
    }
  };

  toggleHidden () {
    this.setState({
      isHidden: !this.state.isHidden
    })
  }

  handleIncrease = () => {
    this.setState({count : this.state.count + 1})
  }

  handleDecrease = ()=> {
    this.setState({count : this.state.count - 1})
  }

  
  render(){
  return (
  <div className="main-container">
      <h1>Jeopardy</h1>
  
    <div  className="question">
     <h1>Let's Play</h1>
    <button onClick={this.handleOnClick}>Get Question</button>

    <div>{this.state.data && <RandomQuestion ranQuestion={this.state.data}/>}</div>
    </div>

    <div className="answer">
    <h1>Answer</h1>
    {/* Add Toggle Button Display */}
    <button onClick={this.toggleHidden.bind(this)}>Answer</button> 
    {!this.state.isHidden && <Answer answer={this.state.data}/>}
    {/* <div>{this.state.data && <Answer answer={this.state.data}/>}</div> */}
    </div>

    <div className="score">
      <h2>Score: {this.state.count}</h2>
      <button onClick={this.handleIncrease}>Increase</button>
       <button onClick= {this.handleDecrease}>Decrease</button>
    </div>
    
  </div>
  );

  }
}


const RandomQuestion = (props) => {
  const{ranQuestion} = props;
  console.log(ranQuestion)
    return(
      <div className="ranQuestion">
      <h1>Question: {ranQuestion.question}? </h1>
      <h2>Category: {ranQuestion.category.title}</h2>
      <h2>Points: {ranQuestion.value}</h2>

      </div>
    )
  }

  const Answer =(props) => {
    const {answer} = props;
    console.log (answer)
    return(
      <div>
        <h1>Answer: {answer.answer}</h1>
      </div>
    )
  }
  

export default App;
