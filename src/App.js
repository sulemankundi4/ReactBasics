import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import { apiUrl, filterData } from './Data';
import Filter from './components/Filter';
import Cards from './components/Cards';
import Spinner from './components/Spinner';
function App() {
  // Use state to store API data
  const [coursesData, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(filterData[0].title);

  // API call after first render
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        let apiCall = await fetch(apiUrl);
        let response = await apiCall.json();
        setData(response.data);
      } catch (error) {
        console.log("Something went wrong");
      }
      setLoading(false);
    };
    fetchData();
  }, []);
  console.log(coursesData)
  return (
    <div className="min-h-screen flex flex-col bg-[#1F4172]">
      <div>
        <Navbar />
      </div>
      <div>
        <div>
          <Filter filter={filterData} category={category} setCategory={setCategory} />
        </div>
        <div className='w-11/12 max-w-[1200px] mx-auto flex justify-center items-center min-h-[50vh]'>
          {loading ? (<Spinner />) : <Cards courses={coursesData} category={category} />}
        </div>
      </div>


    </div>
  );
}

export default App;
