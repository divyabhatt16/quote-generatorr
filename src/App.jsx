import { useState } from "react";
import Quote from './quotecard.jsx'
  function App(){
    const[quote,setQuote]=useState("believe in urself");
    const[author,setAuthor]=useState("unknown")
     function changequote(){
     fetch("https://dummyjson.com/quotes/random")
    .then(response => response.json())
    .then(data => {
      setQuote(data.quote);
      setAuthor(data.author);
    })
    .catch(error => {
      console.log(error);
    });
     }

  return(
  <div>
      <h1>RANDOM QUOTE GENRATOR</h1>
    <Quote quote={quote} author={author}/>
      <button onClick={changequote}> next quote</button>
  </div>
  );
}
export default App;
