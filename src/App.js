import React, { useEffect, useState } from 'react';
import Filters from './components/filters';
import Programs from './components/programs';
import { API_URL } from './constants';
import './App.css';

const App = () => {
  const [filters, setFilters] = useState({ launchYear: null, successLaunch: null, landingSuccess: null});
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const launchYearParam = filters.launchYear? `&launch_year=${filters.launchYear}`: '';
      const launchSuccessParam = filters.successLaunch? `&launch_success=${filters.successLaunch}`: '';
      const launchLandingParam = filters.landingSuccess? `&land_success=${filters.landingSuccess}`: '';
  
      const api = API_URL + launchYearParam + launchSuccessParam + launchLandingParam;
      const res = await fetch(api);
      res.json()
        .then((res) => {
          setData(res);
        })
        .catch(err => console.log(err));
      
    }
    
    fetchData();
  }, [filters]);

  const updateFilters = (newFilters) => {
    setFilters(prevFilters => ({...prevFilters, newFilters}));
  }

  return (
    <div className="wrapper">
      <h1 className="App-header">SpaceX Launch Programs</h1>
      <div className="container">
        <Filters filters={filters} updateFilters={updateFilters} />
        <Programs data={data} />
      </div>
      <div className="footer">
        <h4><strong>Developed by:</strong> Vivek Sharma</h4>
      </div>
    </div>
  );
};

export default App;
