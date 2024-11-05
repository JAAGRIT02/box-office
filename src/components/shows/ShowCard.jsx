export default function ShowCard({ name, img, summary, id, onStarClick }) {
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
        <a href={`/show/${id}`} target="_blank" rel="noreferrer">
          Read more
        </a>
        <button onClick={() => onStarClick(id)}>Star me</button>
      </div>
    </div>
  );
}
