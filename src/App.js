import { useEffect, useState } from 'react';
import './App.css';
import './Filters.css';
import './Button.css';
import Program from './Program';

function App() {
  var [data, setData] = useState([]);
  var [error, setError] = useState(null);
  var [isLoaded, setIsLoaded] = useState(false);
  var [year, setYear] = useState(1);
  var [successLaunch, setSuccessLaunch] =useState(null);
  var years = [2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020] 

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

  console.log(successLaunch);
  
  if (error) {
    return <div>Error: {error.message}</div>;
  } 
  else if (!isLoaded) {
    return <div className="loading">Loading...</div>;
  } 
  else {
    return (
      <div className="app">
      <div className="app__header">
        <h2>Spacex Launch Programs</h2>
      </div>

      <div className="app__body">
        <div className="app__filters">
          <div className="filters">
              <div className="filters__head">
                  <h5>Filters</h5>
              </div>

              <div className="filters__launchyear filters__global">
                  <p className="filters__text">Launch year</p>  
                  <hr className="filters__launchyear--rule" /> 
                  <div className="button">
                    {years.map(y => (
                      <button className={(y == year) ? "button__button true":"button__button"}  onClick={() => {setYear(y)}}>{y}</button>
                    ))}     
                  </div>
              </div>

              <div className="filters__success filters__global">
                  <p className="filters__text">Successful Launch</p>
                  <hr className="filters__launchyear--rule" />
                  <div className="button">
                    <button className={(successLaunch === true) ? "button__button true":"button__button"} onClick={() => {setSuccessLaunch(true)}}>True</button>
                    <button className={(successLaunch === false) ? "button__button true":"button__button"} onClick={() => {setSuccessLaunch(false)}}>False</button>
                  </div>
              </div>
          </div>
        </div>

        <div className="app__programs">
          {data.map(item => (
            (((year == item.launch_year) || (year == 1)) && ((successLaunch === (item.launch_success)) || (successLaunch === null))) ? <Program data={item} yearfil={year}/> : ""
          ))}
        </div>
      </div>
      
    </div>
    );
  }
}

export default App;
