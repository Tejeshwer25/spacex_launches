import { useEffect, useState } from 'react';
import './App.css';
import Filters from './Filters';
import Program from './Program';

function App() {
  var [data, setData] = useState([]);
  var [error, setError] = useState(null);
  var [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch("https://api.spaceXdata.com/v3/launches?limit=100")
    .then((response) => response.json())
    .then((data) => {
      setData(data)
      setIsLoaded(true)
    }, 
    (error)=> {
      setIsLoaded(true);
      setError(error);
    })
  }, []);

  console.log(data);

  if (error) {
    return <div>Error: {error.message}</div>;
  } 
  else if (!isLoaded) {
    return <div>Loading...</div>;
  } 
  else {
    return (
      <div className="app">
      <div className="app__header">
        <h2>Spacex Launch Programs</h2>
      </div>

      <div className="app__body">
        <div className="app__filters">
          <Filters />
        </div>

        <div className="app__programs">
          {data.map(item => (
            <Program data={item}/>
          ))}
        </div>
      </div>
      
    </div>
    );
  }
}

export default App;
