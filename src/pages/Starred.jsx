import { useStarredShows } from '../lib/useStarredShows';

export default function Starred() {
  const [starred] = useStarredShows();
  return <div>Starred page ,starred{starred.length}</div>;
}
