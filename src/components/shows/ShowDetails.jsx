import styled from 'styled-components';
export default function ShowDetails({ status, network, premiered }) {
  return (
    <DetailsWrapper>
      <div>
        <p>Status : {status}</p>
        <p>
          Premiered on {premiered} {!!network && `on ${network.name}`}
        </p>
      </div>
    </DetailsWrapper>
  );
}

const DetailsWrapper = styled.div`
  p {
    margin: 5px 0;

    span {
      font-weight: bold;
    }
  }
`;
