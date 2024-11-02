import { Link } from 'react-router-dom';

export default function ShowCard({ name, img, summary, id }) {
  const strippedSummary = summary
    ? summary.split(' ').slice(0, 10).join(' ').replace(/<.+?>/g, '')
    : 'No description found';

  return (
    <div>
      <div>
        <img src={img} alt={name} />
      </div>
      <h1>{name}</h1>
      <p>{strippedSummary}</p>

      <div>
        <Link to={`/show/${id}`}>Read more</Link>
        <button>Star me</button>
      </div>
    </div>
  );
}
