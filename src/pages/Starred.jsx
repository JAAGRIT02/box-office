import { useQuery } from 'react-query';
import { getShowsbyIds } from '../api/tvMaze';
import ShowGrid from '../components/shows/ShowGrid';
import { useStarredShows } from '../lib/useStarredShows';
import { TextCentre } from '../common/TextCentre';

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
    return <TextCentre>No shows are starred</TextCentre>;
  }

  if (starredShow?.length > 0) {
    return <ShowGrid show={starredShow} />;
  }
  if (starredShowError) {
    return <TextCentre>Error occured{starredShowError.message}</TextCentre>;
  }

  return <TextCentre>Shows are still loading</TextCentre>;
}
