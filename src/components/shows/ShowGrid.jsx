import ShowCard from './ShowCard';

export default function ShowGrid({ show }) {
  return show.map(data => (
    <ShowCard
      key={data.show.id}
      name={data.show.name}
      img={data.show.image ? data.show.image.medium : '/not-found-image.png'}
      id={data.show.id}
      summary={data.show.summary}
    />
  ));
}
