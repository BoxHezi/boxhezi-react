import './App.css';

import Header from './views/Header'
import Body from './views/Body'

import start from "./Background"

import { useEffect } from 'react';

function App() {
  useEffect(() => {
    const body = document.querySelector('body');
    start(body!.clientHeight, body!.clientWidth);
  }, []);

  return (
    <div className="App">
      <div id="background-canvas"><canvas></canvas></div>
      <div className="App-container">
        <Header />
        <Body />
      </div>
    </div>
  )
}

export default App;
