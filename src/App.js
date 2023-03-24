import { Route, Router, Switch } from 'react-router-dom';
import './App.css';
import Header from './containers/Header';
import ProductDetails from './containers/ProductDetails';
import ProductLists from './containers/ProductLists';

function App() {
  return (
    <div className="App">
     <Router>
      <Header/>
      <Switch>
          <Route path='/' exact component={ProductLists}/>
          <Route path='/product/:productId' component={ProductDetails}/>
          <Route>404 Not Found</Route>
        </Switch>
     </Router>
    </div>
  );
}

export default App;
