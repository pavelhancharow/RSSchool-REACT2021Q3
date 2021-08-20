import { FC } from 'react';
import About from '../component/pages/About';
import Details from '../component/pages/Details';
import Home from '../component/pages/Home';
import NotFound from '../component/pages/NotFound';

type RoutesType = {
  path: string;
  name?: string;
  Component: FC;
};

const routesData: RoutesType[] = [
  { path: '/', name: 'Home', Component: Home },
  { path: '/about', name: 'About', Component: About },
  { path: '/details/:title/:from', Component: Details },
  { path: '*', Component: NotFound }
];

export default routesData;
