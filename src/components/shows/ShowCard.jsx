import styled from 'styled-components';
import { SearchCard } from '../../common/SearchCard';
import { StarIcon } from '../../common/StarIcon';
export default function ShowCard({
  name,
  img,
  summary,
  id,
  onStarClick,
  isStarred,
}) {
  const strippedSummary = summary
    ? summary.split(' ').slice(0, 10).join(' ').replace(/<.+?>/g, '') + ' ...'
    : 'No description found';

  return (
    <StyledShowCard>
      <div className="img-wrapper">
        <img src={img} alt={name} />
      </div>
      <h1>{name}</h1>
      <p>{strippedSummary}</p>

      <div className="btns">
        <a href={`/show/${id}`} target="_blank" rel="noreferrer">
          Read more
        </a>
        <button onClick={() => onStarClick(id)}>
          <StarIcon $active={isStarred} />
          {/* {isStarred ? 'unstar me' : 'Star me'} */}
        </button>
      </div>
    </StyledShowCard>
  );
}

const StyledShowCard = styled(SearchCard)`
  .btns {
    margin-top: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    a {
      text-decoration-color: #000;
      color: #000;
      &:hover {
        text-decoration-color: blue;
        color: blue;
      }
    }
    button {
      outline: none;
      border: 1px solid #8e8e8e;
      border-radius: 15px;
      padding: 5px 20px;
      background-color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      &:hover {
        cursor: pointer;
      }
    }
  }
`;
