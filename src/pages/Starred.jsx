import { useQuery } from 'react-query';
import { getShowsbyIds } from '../api/tvMaze';
import ShowGrid from '../components/shows/ShowGrid';
import { useStarredShows } from '../lib/useStarredShows';

export default function Starred() {
  const [starredShowIds] = useStarredShows();

  const { data: starredShow, error: starredShowError } = useQuery({
    queryKey: ['starred', starredShowIds],
    queryFn: async () =>
      getShowsbyIds(starredShowIds).then(result =>
        result.map(show => ({ show }))
      ),
    refetchOnWindowFocus: false,
  });
  console.log(starredShow);

  if (starredShow?.length === 0) {
    return <div>No shows are starred</div>;
  }

  if (starredShow?.length > 0) {
    return <ShowGrid show={starredShow} />;
  }
  if (starredShowError) {
    return <div>Error occured{starredShowError.message}</div>;
  }

  return <div>Shows are still loading</div>;
}
