import { useParams } from 'react-router-dom';

export default function Show() {
  const { showId } = useParams();

  return <div>show page for {showId}</div>;
}
