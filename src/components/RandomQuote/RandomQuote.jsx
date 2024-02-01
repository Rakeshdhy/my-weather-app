import React, { useState } from 'react';
import "./RandomQuote.css";
import TwitterIcon from '../Assets/twitter-x.png';
import ReloadIcon from '../Assets/reload.png';
const RandomQuote = () => {

    let quotes = [];

    async function loadquotes(){
        const response = await fetch("https://type.fit/api/quotes");
        quotes = await response.json();
    }      

   
    const [quote, setQuote] = useState({
        text: "Correction does much, but encouragement does more.",
        author:"Johann Wolfgang von Goethe"
    });

    const random = () => {
        const select = quotes[Math.floor(Math.random() * quotes.length)];
        setQuote(select);
    }

    
    loadquotes();
    
  return (
    <React.Fragment>
        <div className="mycontainer">
            <div className="quote">
                {quote.text}
            </div>
    <div>
    <div className="line">    </div>
    <div className="bottom">
    <div className="author">
            {quote.author.split(',')[0]}
    </div>

    <div className="icons">
    <img  src={ReloadIcon} alt="ReloadIcon" onClick={() => {random()}}/>
    <img  src={TwitterIcon} alt="TwitterIcon" />

    </div>



    </div>

    </div>

        </div>
    </React.Fragment>
  )
}

export default RandomQuote
