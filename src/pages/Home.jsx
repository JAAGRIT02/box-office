// import { Link } from 'react-router-dom';

import { useState } from 'react';
import { searchForPeople, searchForShows } from '../api/tvMaze';

export default function Home() {
  const [searchString, setSearchString] = useState('');
  const [apiData, setApiData] = useState(null);
  const [apiDataError, setApiDataError] = useState(null);
  const [searchOption, setSearchOption] = useState('shows');
  // console.log(apiDataError);
  // console.log(searchOption);

  const onInputChange = evt => {
    // console.log(evt.target.value);
    // console.log(searchString);
    setSearchString(evt.target.value);
  };

  const onSearch = async evt => {
    evt.preventDefault();
    try {
      setApiDataError(null); //used to clean up previous error if there any
      if (searchOption === 'shows') {
        const result = await searchForShows(searchString);
        setApiData(result);
      } else {
        const result = await searchForPeople(searchString);
        setApiData(result);
      }

      // console.log(result);
    } catch (error) {
      setApiDataError(error);
    }
  };

  const onRadioChange = evt => {
    setSearchOption(evt.target.value);
  };

  const renderData = () => {
    if (apiDataError) {
      return <div>Error occured: {apiDataError.message}</div>;
    }
    if (apiData) {
      return apiData[0].show
        ? apiData.map(data => <div key={data.show.id}>{data.show.name}</div>)
        : apiData.map(data => <div key={data.person.id}>{data.person.name}</div>);
    }
    return null;
  };

  return (
    <div>
      Welcome to Home Page <br /> <br />
      <form onSubmit={onSearch}>
        <input type="text" onChange={onInputChange} value={searchString} />
        <label htmlFor="">
          Shows
          <input
            type="radio"
            value="shows"
            name="search-option"
            onChange={onRadioChange}
            checked={searchOption === 'shows'}
          />
        </label>
        <label htmlFor="">
          Actors
          <input
            type="radio"
            value="actors"
            name="search-option"
            onChange={onRadioChange}
            checked={searchOption === 'actors'}
          />
        </label>
        <button type="submit">Search</button>
      </form>
      <div>{renderData()}</div>
      {/* <Link to="/starred">Go to Starred page</Link> */}
    </div>
  );
}
