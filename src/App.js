
import { Component } from 'react';
import './App.css';
import  RandomQuestion from './components/RandomQuestion'
import Answer from './components/Answer';
import Score from './components/Score';

class App extends Component {
  state = {
    data: null,
    data2: null,
    question:'',
    value: 0,
    answer: '',
    category: '',
    isHidden: true,
  }

//   async componentDidMount(){
//     try{
//     const res = await fetch("http://jservice.io/api/random")
//     const data = await res.json()
//     this.setState({data: data[10]})
//     console.log('Hello from component did mount!')
//     } catch (err) {
//         console.error(err)
//     }
// }

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
  
  render(){
  return (
  <div className="main-container">
      <h1>Welcome to Jeopardy</h1>
  
    <div  className="question">
     <h2>Let's Play</h2>
    <button onClick={this.handleOnClick}>Get Question</button>
    <div>{this.state.data && <RandomQuestion rQ={this.state.data}/>} 
    </div>
    </div> 
    <br/>

    <div className="answer">
    {/* Add Toggle Button Display */}
    <button onClick={this.toggleHidden.bind(this)}>Answer</button> 
    {!this.state.isHidden && <Answer answer={this.state.data}/>}
    </div>
    <div>
        {this.state.data && <Score scr={this.state.data}/>}
    </div>

    {/* // Get 10 More Questions */}
    <div className="tenQuestion">
      <button onClick={this.handleClick}>Get 10 Questions</button>
      {this.state.data2 && this.state.data2.map (data2 => <h2>{data2.question}n</h2>)}
    </div> 
  </div>
  );

  }
}
 
export default App;
