export default function Seasons({ seasons }) {
  return (
    <div>
      <div>
        <p>Seasons in total:{seasons.length}</p>
      </div>
      <div>
        <p>
          Episodes in total:{' '}
          {seasons.reduce((sum, season) => sum + season.episodeOrder, 0)}
        </p>
      </div>
      <div>
        {seasons.map(season => {
          return (
            <div key={season.id}>
              <p>Season {season.number}</p>
              <p>{season.episodeOrder} episodes</p>

              <div>
                Aired : {season.premiereDate} to {season.endDate}
              </div>
              <hr />
            </div>
          );
        })}
      </div>
    </div>
  );
}
