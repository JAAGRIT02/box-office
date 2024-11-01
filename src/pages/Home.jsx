// import { Link } from 'react-router-dom';

import { useState } from 'react';
import { searchForPeople, searchForShows } from '../api/tvMaze';
import SearchForm from '../components/SearchFrom';

export default function Home() {
  const [apiData, setApiData] = useState(null);
  const [apiDataError, setApiDataError] = useState(null);

  const onSearch = async ({ q, searchOption }) => {
    try {
      setApiDataError(null); //used to clean up previous error if there any
      let result;
      if (searchOption === 'shows') {
        result = await searchForShows(q);
      } else {
        result = await searchForPeople(q);
      }
      setApiData(result);

      // console.log(result);
    } catch (error) {
      setApiDataError(error);
    }
  };

  const renderData = () => {
    if (apiDataError) {
      return <div>Error occured: {apiDataError.message}</div>;
    }
    if (apiData) {
      return apiData[0].show
        ? apiData.map(data => <div key={data.show.id}>{data.show.name}</div>)
        : apiData.map(data => (
            <div key={data.person.id}>{data.person.name}</div>
          ));
    }
    return null;
  };

  return (
    <div>
      Welcome to Home Page <br /> <br />
      <SearchForm onSearch={onSearch} />
      <div>{renderData()}</div>
      {/* <Link to="/starred">Go to Starred page</Link> */}
    </div>
  );
}
