
import { Component } from 'react';
import './App.css';
import  RandomQuestion from './components/RandomQuestion'
import Answer from './components/Answer';


class App extends Component {
  state = {
    data: null,
    data2: null,
    question:'',
    value: '',
    answer: '',
    category: '',
    point: '',
    isHidden: true,
    count: 0
  }

  handleOnClick= async() => {
    try {
      const res = await fetch("http://jservice.io/api/random");
      const data = await res.json();
      this.setState({data: data[0]})
    } catch (err) {
        console.error(err)
    }
  };

// Get 10 More Questions
 handleClick= async() => {
    const res = await fetch('http://jservice.io/api/random?count=10')
    const data = await res.json()
    this.setState({data2: data})
}

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

  handleReset = ()=> {
    this.setState({count : this.state.count = 0})
  }
  
  render(){
  return (
  <div className="main-container">
      <h1>Welcome to Jeopardy</h1>
  
    <div  className="question">
     <h2>Let's Play</h2>
    <button onClick={this.handleOnClick}>Get Question</button>

    <div>{this.state.data && <RandomQuestion rQ={this.state.data}/>}</div>
    </div> <br/>

    <div className="answer">
    {/* <h2>Answer</h2> */}
    {/* Add Toggle Button Display */}
    <button onClick={this.toggleHidden.bind(this)}>Answer</button> 
    {!this.state.isHidden && <Answer answer={this.state.data}/>}
    {/* NO NEED */}
    {/* <div>{this.state.data && <Answer answer={this.state.data}/>}</div> */}
    </div>

    <div className="score">
      <h2>Score: {this.state.count}</h2>
      <button onClick={this.handleIncrease}>Increase</button>
       <button onClick= {this.handleDecrease}>Decrease</button>
       <button onClick= {this.handleReset}>Reset</button>
    </div> <br/>

    {/* // Get 10 More Questions */}
    <div className="tenQuestion">
      <button onClick={this.handleClick}>Get 10 Questions</button>
      {/* NO NEED */}
      {/* {this.state.data2 && <TenQuestions tenQuestions={this.state.data2}/>} */}
      {this.state.data2 && this.state.data2.map (data2 => <h2>{data2.question}n</h2>)}
    </div>

    
  </div>
  );

  }
}
  //NO NEED!
  // const TenQuestions =(props) => {
  //   const {tenQuestions} = props;
  //   console.log(tenQuestions)
  //   return(
  //     <div>
  //       <h2>{tenQuestions.question}</h2>
  //     </div>
  //   )
  // }

export default App;
