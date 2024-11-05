// import { Link } from 'react-router-dom';

import { useState } from 'react';
import { searchForPeople, searchForShows } from '../api/tvMaze';
import SearchForm from '../components/SearchFrom';
import ShowGrid from '../components/shows/ShowGrid';
import ActorGrid from '../components/actors/ActorGrid';
import { useQuery } from 'react-query';

export default function Home() {

  const [filter, setFilter] = useState(null);

  const { data: apiData, error: apiDataError } = useQuery({
    queryKey: ['search', filter],
    queryFn: () =>
      filter.searchOption === 'shows'
        ? searchForShows(filter.q)
        : searchForPeople(filter.q),
    // ⬇️ disabled as long as the filter is empty
    enabled: !!filter,
    refetchOnWindowFocus: false,
  });

  const onSearch = async ({ q, searchOption }) => {
    setFilter({ q, searchOption });
  };

  const renderData = () => {
    if (apiDataError) {
      return <div>Error occured: {apiDataError.message}</div>;
    }
    if (apiData?.length === 0) {
      return <div>No Result Found</div>;
    }
    if (apiData) {
      return apiData[0].show ? (
        <ShowGrid show={apiData} />
      ) : (
        <ActorGrid actor={apiData} />
      );
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






// const [apiData, setApiData] = useState(null);
// const [apiDataError, setApiDataError] = useState(null);
// const onSearch = async ({ q, searchOption }) => {
// try {
//   setApiDataError(null); //used to clean up previous error if there any
//   let result;
//   if (searchOption === 'shows') {
//     result = await searchForShows(q);
//   } else {
//     result = await searchForPeople(q);
//   }
//   setApiData(result);

//   // console.log(result);
// } catch (error) {
//   setApiDataError(error);
// }

// const reducerfn = (currentCounter, action) => {
//   switch (action.type) {
//     case 'INCREMENT':
//       return currentCounter + 1;
//     case 'DECREMENT':
//       return currentCounter - 1;
//     case 'RESET':
//       return 0;
//   }
//   return 0;
// };

// const [counter, dispatch] = useReducer(reducerfn, 0);

// const onIncrement = () => {
//   dispatch({ type: 'INCREMENT' });
// };
// const onDecrement = () => {
//   dispatch({ type: 'DECREMENT' });
// };
// const onReset = () => {
//   dispatch({ type: 'RESET' });
// };

// <div>{counter}</div>
//     <button onClick={onIncrement}>Increment</button>
//     <button onClick={onDecrement}>Decrement</button>
//     <button onClick={onReset}>Reset</button>
