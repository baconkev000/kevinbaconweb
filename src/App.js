import './styles/App.css';

import { useState, useEffect } from 'react';
import Body from './components/global/Body';
import Brackets from './components/global/Brackets';
import BeatLoader from "react-spinners/BeatLoader";

function App() {
  // eslint-disable-next-line
  let [color, setColor] = useState("#f3e98b");
  let [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000)
  }, [])

  return (
    <div className="App">
      {
        loading ? 
             <div>
            <header className="App-header">

                <Brackets name="KB" active={true} />
              
              <BeatLoader color={color} loading={loading} size={10} />
            </header>
          </div>
          :
        <div className="site-body">
          <Body></Body>
        </div>
      
      }
      </div>
  );
}

export default App;
