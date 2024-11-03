export default function ShowMainData(props) {
  const { name, img, rating, genres, summary } = props;
  return (
    <div>
      <img src={img ? img.original : '/not-found-image.png'} alt={name} />
      <div>
        <h1>{name}</h1>
        <div>Rating:{rating.average || 'N/A'}</div>
        <div>Genres : 
          {genres.map(item => (
            <span key={item}>{item} </span>
          ))}
        </div>
        <div dangerouslySetInnerHTML={{ __html: summary }} />
      </div>
    </div>
  );
}
