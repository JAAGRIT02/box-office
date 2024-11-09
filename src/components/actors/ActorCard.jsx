import { SearchCard } from '../../common/SearchCard';

export default function ActorCard(props) {
  const { name, img, gender, country, birthday, deathday } = props;
  return (
    <SearchCard>
      <div className="img-wrapper">
        <img src={img} alt={name} />
      </div>
      <h1>
        {name} {!!gender && `(${gender})`}
      </h1>
      <p>{country ? `Country: ${country}` : 'Country not known'}</p>
      <p>{!!birthday && `Born on ${birthday}`}</p>
      <p>{deathday ? `Died${deathday}` : 'Alive'}</p>
    </SearchCard>
  );
}
