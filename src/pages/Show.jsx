import { useParams } from 'react-router-dom';
import { getShowById } from '../api/tvMaze';
import { useQuery } from 'react-query';

export default function Show() {
  const { showId } = useParams();

  // const { showData, showError } = useShowById(showId);
  const { data: showData, error: showError } = useQuery({
    //recommended way of fetching the data
    queryKey: ['show', showId],
    queryFn: () => getShowById(showId),
  });
  if (showError) {
    return <div>Got an Error : {showError.message}</div>;
  }
  if (showData) {
    return <div>Got show data: {showData.name}</div>;
  }

  return <div>Data is loading</div>;
}

// const useShowById = showId => {
//   const [showData, setShowData] = useState(null);
//   const [showError, setShowError] = useState(null);

// useEffect(() => {   //not recommended when in strict mode
//   // getShowById(showId)
//   async function fetchData() {
//     try {
//       const data = await getShowById(showId);
//       // console.log(data);
//       setShowData(data);
//     } catch (error) {
//       setShowError(error);
//     }
//   }
//   fetchData();
// }, [showId]);

//   return { showData, showError };
// };
