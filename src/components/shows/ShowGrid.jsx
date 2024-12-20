import { FlexGrid } from '../../common/FlexGrid';
import { useStarredShows } from '../../lib/useStarredShows';
import ShowCard from './ShowCard';
import notFoundImgSrc from '../../lib/not-found-image.png'


export default function ShowGrid({ show }) {
  const [starred, dispatchStarred] = useStarredShows();

  // console.log(starred);

  const onStarClick = showId => {
    const isStarred = starred.includes(showId);
    if (isStarred) {
      dispatchStarred({ type: 'UNSTAR', showId: showId });
    } else {
      dispatchStarred({ type: 'STAR', showId: showId });
    }
  };

  return (
    <FlexGrid>
      {show.map(data => (
        <ShowCard
          key={data.show.id}
          name={data.show.name}
          img={
            data.show.image ? data.show.image.medium : notFoundImgSrc
          }
          id={data.show.id}
          summary={data.show.summary}
          onStarClick={onStarClick}
          isStarred={starred.includes(data.show.id)}
        />
      ))}
      ;
    </FlexGrid>
  );
}
