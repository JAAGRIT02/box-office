import styled from 'styled-components';
export default function Seasons({ seasons }) {
  return (
    <SeasonsWrapper>
      <div>
        <p>Seasons in total:{seasons.length}</p>
      </div>
      <div>
        <p>
          Episodes in total:{' '}
          {seasons.reduce((sum, season) => sum + season.episodeOrder, 0)}
        </p>
      </div>
      <SeasonList>
        {seasons.map(season => {
          return (
            <div key={season.id} className="season-item">
              <div className="left">
                <p>Season {season.number}</p>
                <p>{season.episodeOrder} episodes</p>
              </div>
              <div className="right">
                Aired :{' '}
                <strong>
                  {season.premiereDate} to {season.endDate}
                </strong>
              </div>
              {/* <hr /> */}
            </div>
          );
        })}
      </SeasonList>
    </SeasonsWrapper>
  );
}


const SeasonsWrapper = styled.div`
  p {
    margin: 5px 0;
  }

  span {
    font-weight: 700;
  }
`;

const SeasonList = styled.div`
  display: flex;
  flex-direction: column;

  .season-item {
    display: flex;
    align-items: center;
    margin: 10px 0;

    &:last-child {
      margin-bottom: 0;
    }

    .left {
      flex: 0 0 30%;
      border-right: 1px solid #b0b0b0;
      padding-right: 20px;
    }

    .right {
      padding-left: 20px;
      flex: 1;
    }
  }
`;
