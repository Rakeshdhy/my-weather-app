import React, { useState } from 'react'
import "./Quotes.css";
import reloadIcon from "../Assets/reload.png";
import TwitterIcon from "../Assets/twitter-x.png";
const QuotesR = () => {

    let quotes = [];

    async function loadQuotes(){
     const response = await fetch("https://type.fit/api/quotes");
     quotes  = await response.json();
    
    }

    const [quote, setQuote] =  useState({
        text:"My quotes",
        author: "Rakesh Mistry"
      })


     const random = () =>{
      let select = quotes[Math.floor(Math.random()* quotes.length)]
      setQuote(select);
     } 

 
      loadQuotes();

  return (

 

    <React.Fragment>
        <div className="my-container">
            <h1>{quote.text}</h1>
            <div className="line"></div>
            <div className="bbox">
                <div className="author-name">
                    <h5>
                        {quote.author}
                    </h5>

                </div>
            <div className="img">
                <img src={reloadIcon} alt="" onClick={() =>{random()}}  />
                <img src={TwitterIcon} alt="" />

            </div>


            </div>

        </div>




    </React.Fragment>
  )
}

export default QuotesR
