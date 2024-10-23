import { Link } from 'react-router-dom';
import Starred from './Starred';

export default function Home() {
  return (
    <div>
      <Link to="Starred">got to Starred page</Link>
    </div>
  );
}
