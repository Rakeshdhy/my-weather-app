import './App.css';
import QuotesR from './components/Quotes/QuotesR';
import RandomQuote from './components/RandomQuote/RandomQuote';
import WeatherApp from './components/WeatherApp/WeatherApp';

function App() {
  return (
    <div className="App">
      <WeatherApp/> 
      <RandomQuote/>
      <QuotesR/>
    </div>
  );
}

export default App;
