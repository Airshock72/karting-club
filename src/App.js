import './App.css';
import Header from './components/header/header';
import { BrowserRouter as Router, useRoutes } from 'react-router-dom';
import Homepage from './components/homepage/homepage';

const App = () => {
  let routes = useRoutes([{ path: '', element: <Homepage /> }]);
  return routes;
};

const AppWrapper = () => {
  return (
    <Router>
      <div>
        <Header />
        <App />
      </div>
    </Router>
  );
};

export default AppWrapper;
