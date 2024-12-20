import { FlexGrid } from '../../common/FlexGrid';
import ActorCard from './ActorCard';
import notFoundImgSrc from '../../lib/not-found-image.png'

export default function ActorGrid({ actor }) {
  return (
    <FlexGrid>
      {actor.map(data => (
        <ActorCard
          key={data.person.id}
          name={data.person.name}
          country={data.person.country ? data.person.country.name : null}
          birthday={data.person.birthday}
          deathday={data.person.deathday}
          gender={data.person.gender}
          img={
            data.person.image
              ? data.person.image.medium
              : notFoundImgSrc
          }
        />
      ))}
      ;
    </FlexGrid>
  );
}
