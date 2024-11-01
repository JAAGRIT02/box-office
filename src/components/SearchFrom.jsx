import { useState } from 'react';

export default function SearchForm({ onSearch }) {
  const [searchString, setSearchString] = useState('');
  const [searchOption, setSearchOption] = useState('shows');

  const onInputChange = evt => {
    // console.log(evt.target.value);
    // console.log(searchString);
    setSearchString(evt.target.value);
  };

  const onRadioChange = evt => {
    setSearchOption(evt.target.value);
  };

  const onSubmit = evt => {
    evt.preventDefault();
    const options = {
      q: searchString,
      searchOption,
    };
    onSearch(options);
  };

  return (
    <form onSubmit={onSubmit}>
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
          name="searh-option"
          onChange={onRadioChange}
          checked={searchOption === 'actors'}
        />
      </label>
      <button type="submit">Search</button>
    </form>
  );
}
