import styled from 'styled-components';
import { Link, useParams } from 'react-router-dom';
import { getShowById } from '../api/tvMaze';
import { useQuery } from 'react-query';
import ShowMainData from '../components/shows/ShowMainData';
import ShowDetails from '../components/shows/ShowDetails';
import Seasons from '../components/shows/Seasons';
import Cast from '../components/shows/Cast';
import { TextCentre } from '../common/TextCentre';

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
    return <TextCentre>Got an Error : {showError.message}</TextCentre>;
  }
  if (showData) {
    return (
      <ShowPageWrapper>
        <BackHomeWrapper>
          <Link to="/">Go back to home</Link>
        </BackHomeWrapper>

        <ShowMainData
          name={showData.name}
          img={showData.image}
          rating={showData.rating}
          genres={showData.genres}
          summary={showData.summary}
        />

        <InfoBlock>
          <h2>Details</h2>
          <ShowDetails
            status={showData.status}
            premiered={showData.premiered}
            network={showData.network}
          />
        </InfoBlock>

        <InfoBlock>
          <h2>Season</h2>
          <Seasons seasons={showData._embedded.seasons} />
        </InfoBlock>

        <InfoBlock>
          <h2>Cast</h2>
          <Cast cast={showData._embedded.cast} />
        </InfoBlock>
      </ShowPageWrapper>
    );
  }

  return <TextCentre>Data is loading</TextCentre>;
}
const BackHomeWrapper = styled.div`
  margin-bottom: 30px;
  text-align: left;
  a {
    padding: 10px;
    color: ${props => props.theme.mainColors.dark};
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;
const ShowPageWrapper = styled.div`
  padding: 0 20px;

  @media only screen and (min-width: 516px) {
    padding: 0 40px;
  }

  @media only screen and (min-width: 768px) {
    padding: 0 60px;
  }

  @media only screen and (min-width: 992px) {
    padding: 0 80px;
  }
`;
const InfoBlock = styled.div`
  margin-bottom: 40px;
  h2 {
    margin: 0;
    margin-bottom: 30px;
    font-size: 22px;
  }
`;

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
