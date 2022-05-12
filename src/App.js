import './App.css';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import { BrowserRouter as Router, useRoutes } from 'react-router-dom';
import Homepage from './components/homepage/homepage';
import About from './components/about/about';

const App = () => {
  let routes = useRoutes([
    { path: '', element: <Homepage /> },
    { path: '/about', element: <About /> },
  ]);
  return routes;
};

const AppWrapper = () => {
  return (
    <Router>
      <div>
        <Header />
        <App />
        <Footer />
      </div>
    </Router>
  );
};

export default AppWrapper;
