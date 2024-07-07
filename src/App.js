import './App.css';
import Button from './components/Button';
import Counter from './components/Counter';
import reactLogo from './images/react-logo.png'
import { useState } from 'react';

function App() {

  const [numClicks, setNumClicks] = useState(0);
  
  const addClick = () => {
    setNumClicks(numClicks + 1);
  }

  const restartCounter = () => {
    setNumClicks(0);
  }

  return (
    <div className='App'>
      <div className='logo-container'>
        <img className='logo' 
        src={reactLogo}
        alt='logo'/>
      </div>
      <div className='main-container'>
        <Counter 
          numClicks= {numClicks}
        />
        <Button 
          text='Click'
          buttonType= 'clickButton'
          clickFunction={addClick}
        />
        <Button 
          text='Restart'
          buttonType= 'restartButton'
          clickFunction={restartCounter}
        />
      </div>
    </div>
  );
}

export default App;
