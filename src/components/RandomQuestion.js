
const RandomQuestion = (props) => {
  const{rQ} = props;
  console.log(rQ)
    return(
      <div className="ranQuestion">
      <h2>Question: {rQ.question}? </h2>
      <h2>Category: {rQ.category.title}</h2>
      <h2>Points: {rQ.value}</h2>
      </div>
    )
  }


  export default RandomQuestion;