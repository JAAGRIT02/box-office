import styled from 'styled-components';
import { StarIcon } from '../../common/StarIcon';
import notFoundImgSrc from '../../lib/not-found-image.png';

export default function ShowMainData(props) {
  const { name, img, rating, genres, summary } = props;
  return (
    <MainDataWrapper>
      <img src={img ? img.original : notFoundImgSrc} alt={name} />
      <div className="text-side">
        <Headline>
          <h1>{name}</h1>
          <div>
            <StarIcon active />
            <span>{rating.average || 'N/A'}</span>
          </div>
        </Headline>
        <div
          dangerouslySetInnerHTML={{ __html: summary }}
          className="summary"
        />
        <div>
          Genres :
          <Genres>
            {genres.map(item => (
              <span key={item}>{item} </span>
            ))}
          </Genres>
        </div>
      </div>
    </MainDataWrapper>
  );
}
const MainDataWrapper = styled.div`
  display: flex;
  margin-bottom: 40px;

  img {
    min-width: 250px;
    width: 300px;
    max-height: 450px;
    border: 1px solid #ddd;
    border-radius: 40px;
  }

  .text-side {
    margin-left: 20px;
    .summary {
      color: #5f5f5f;
      line-height: 1.5;
    }
  }

  @media only screen and (max-width: 768px) {
    flex-wrap: wrap;
    img {
      margin-bottom: 20px;
      margin: auto;
    }
    .text-side {
      margin-left: 0;
      margin-top: 20px;
    }
  }
`;
const Headline = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  h1 {
    margin: 0;
    border-right: 1px solid #ddd;
    padding-right: 25px;
    margin-right: 20px;
  }

  div {
    display: flex;
    align-items: center;
    span {
      margin-left: 10px;
    }
  }
`;
const Genres = styled.div`
  display: inline-flex;
  flex-wrap: wrap;

  span {
    margin: 6px;
    margin-bottom: 0;
    color: blue;
    background-color: #d0c9ff;
    padding: 3px 13px;
    border-radius: 20px;
    font-size: 14px;
  }
`;
