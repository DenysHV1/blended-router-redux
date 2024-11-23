import { Heading } from 'components';
import { lazy } from 'react';

const Country = lazy(() => import('./pages/Country'));
const Home = lazy(() => import('./pages/Home'));
const SearchCountry = lazy(() => import('./pages/SearchCountry'));

export const App = () => {
  return <Heading title="App" bottom />;
};
