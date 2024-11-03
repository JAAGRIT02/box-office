import { useParams } from 'react-router-dom';
import { getShowById } from '../api/tvMaze';
import { useQuery } from 'react-query';
import ShowMainData from '../components/shows/ShowMainData';
import ShowDetails from '../components/shows/ShowDetails';
import Seasons from '../components/shows/Seasons';
import Cast from '../components/shows/Cast';

export default function Show() {
  const { showId } = useParams();

  // const { showData, showError } = useShowById(showId);
  const { data: showData, error: showError } = useQuery({
    //recommended way of fetching the data
    queryKey: ['show', showId],
    queryFn: () => getShowById(showId),
    refetchOnWindowFocus: false,
  });
  if (showError) {
    return <div>Got an Error : {showError.message}</div>;
  }
  if (showData) {
    return (
      <div>
        <ShowMainData
          name={showData.name}
          img={showData.image}
          rating={showData.rating}
          genres={showData.genres}
          summary={showData.summary}
        />
        <div>
          <h2>Details</h2>
          <ShowDetails
            status={showData.status}
            premiered={showData.premiered}
            network={showData.network}
          />
        </div>
        <div>
          <h2>Season</h2>
          <Seasons seasons={showData._embedded.seasons}/>
        </div>
        <div>
          <h2>Cast</h2>
          <Cast cast={showData._embedded.cast} />
        </div>
      </div>
    );
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
