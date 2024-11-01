// import { Link } from 'react-router-dom';

import { useState } from 'react';
import { searchForShows } from '../api/tvMaze';

export default function Home() {
  const [searchString, setSearchString] = useState('');
  const [apiData, setApiData] = useState(null);
  const [apiDataError, setApiDataError] = useState(null);

  // console.log(apiDataError);

  const onInputChange = evt => {
    // console.log(evt.target.value);
    // console.log(searchString);
    setSearchString(evt.target.value);
  };
  const onSearch = async evt => {
    setApiDataError(null); //used to clean up previous error if there any
    evt.preventDefault();
    try {
      const result = await searchForShows(searchString);
      // console.log(result);
      setApiData(result);
    } catch (error) {
      setApiDataError(error);
    }
  };
  const renderData = () => {
    if (apiDataError) {
      return <div>Error occured: {apiDataError.message}</div>;
    }
    if (apiData) {
      return apiData.map(data => (
        <div key={data.show.id}>{data.show.name}</div>
      ));
    }
    return null;
  };
  return (
    <div>
      Welcome to Home Page <br /> <br />
      <form onSubmit={onSearch}>
        <input type="text" onChange={onInputChange} value={searchString} />
        <button type="submit">Search</button>
      </form>
      <div>{renderData()}</div>
      {/* <Link to="/starred">Go to Starred page</Link> */}
    </div>
  );
}
