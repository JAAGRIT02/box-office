// import { Link } from 'react-router-dom';

import { useState } from 'react';

export default function Home() {
  const [inputValue, setInputValue] = useState('');
  const onInputChange = evt => {
    // console.log(evt.target.value);
    // console.log(inputValue);

    setInputValue(evt.target.value);
  };
  return (
    <div>
      Welcome to Home Page <br /> <br />
      <div>{inputValue}</div>
      
      {/* one way data binding as value is not changing in textarea on click*/}
      <input type="text" onChange={onInputChange} value={inputValue} />
      {/* two way data binding by putting value attribute in input */}

      <button
        onClick={() => {
          setInputValue('Jaagrit');
        }}
      >
        click to update to random value
      </button>
      {/* <Link to="/starred">Go to Starred page</Link> */}
    </div>
  );
}
