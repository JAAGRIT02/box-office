// import { Link } from 'react-router-dom';

import { useState } from 'react';

export default function Home() {
  const [searchString, setSearchString] = useState('');

  const onInputChange = evt => {
    // console.log(evt.target.value);
    // console.log(searchString);
    setSearchString(evt.target.value);
  };
  const onSearch = async evt => {
    evt.preventDefault();
    const response = await fetch(`https://api.tvmaze.com/search/shows?q=${searchString}`);
    const body = await response.json();
    console.log(body);
  };
  return (
    <div>
      Welcome to Home Page <br /> <br />
      <form onSubmit={onSearch}>
        <input type="text" onChange={onInputChange} value={searchString} />
        <button type="submit">Search</button>
      </form>
      {/* <Link to="/starred">Go to Starred page</Link> */}
    </div>
  );
}
