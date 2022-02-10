const Answer =(props) => {
    const {answer} = props;
    console.log (answer)
    return(
      <div>
        <h2>Answer: {answer.answer}</h2>
      </div>
    )
  }

  export default Answer;