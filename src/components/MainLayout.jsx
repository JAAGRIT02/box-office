import { Outlet } from 'react-router-dom';
import Navs from './Navs';
import AppTitle from './AppTitle';

export default function MainLayout() {
  return (
    <div>
      {/* This is shared Markup */}
      <AppTitle />
      <Navs/>
      <Outlet />
    </div>
  );
}
