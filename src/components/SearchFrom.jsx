import styled from 'styled-components';
import { useState } from 'react';
import { useSearchStr } from '../lib/useSearchStr';
import CustomRadio from './CustomRadio';

export default function SearchForm({ onSearch }) {
  const [searchString, setSearchString] = useSearchStr();
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
      <SearchInput
        type="text"
        onChange={onInputChange}
        value={searchString}
        placeholder="Search for something"
      />

      <RadioInputsWrapper>
        <CustomRadio
          label="Shows"
          value="shows"
          name="search-option"
          onChange={onRadioChange}
          checked={searchOption === 'shows'}
        />

        <CustomRadio
          label="Actors"
          value="actors"
          name="searh-option"
          onChange={onRadioChange}
          checked={searchOption === 'actors'}
        />
      </RadioInputsWrapper>
      <SearchButtonWrapper>
        <button type="submit">Search</button>
      </SearchButtonWrapper>
    </form>
  );
}

export const SearchInput = styled.input`
  display: block;
  font-family: 'Roboto', sans-serif;
  width: 200px;
  margin: auto;
  outline: none;
  padding: 13px 15px;
  border: 1px solid #dbdbdb;
  box-shadow: 0px 0px 10px 0px rgba(219, 219, 219, 0.5);
  font-size: 14px;
  border-radius: 12px;
  color: #8d8d8d;

  &::placeholder {
    font-weight: 300;
    color: #8d8d8d;
  }
`;

export const RadioInputsWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;

  div {
    margin: 0 15px;
  }
`;

export const SearchButtonWrapper = styled.div`
  text-align: center;
  margin-bottom: 35px;

  button {
    color: #fff;
    background-color: ${({ theme }) => theme.mainColors.blue};
    margin: auto;
    padding: 10px 50px;
    font-size: 15px;
    border: none;
    outline: none;
    border-radius: 12px;
    &:hover {
      cursor: pointer;
    }
  }
`;

//1)mount
// //2)rerender
// //2.5)logic before next rerender
// //3)unmounts
// console.log('rerender');
// //useEffect runs atleast once
// useEffect(() => {
//   // console.log('mounted');
//   console.log('search option changes', searchOption);

//   return () => {
//     console.log('before next useEffect run', searchOption);
//   };

//   // return () => {                  //cleanup function
//   //   console.log("unmounted");     //only runs if there is no dependencies
//   // };
// }, [searchOption]);
