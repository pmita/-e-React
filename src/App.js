import './App.scss';
// import our components
import Navigation from './shared/Navigation/component';
// import our Pages
import HomePage from './pages/Home';
import BlogPage from './pages/Blog';
import SalePage from './pages/Sale';
import ShopPage from './pages/Shop';
import ContactUsPage from './pages/ContactUs';
// import everything react-router related
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Switch>
          <Route path='/' exact component={HomePage} />
          <Route path='/blog' component={BlogPage} />
          <Route path='/sale' component={SalePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/contact' component={ContactUsPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
