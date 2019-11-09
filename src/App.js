import React from "react";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Quote from './components/quotes';
import CategoryList from './components/categoryList';

import './App.css';

function App() {
    return (
      <div className="App">
        <header>
          <h1>Chuck Reacts!</h1>
        </header>
        <Router>
          <nav>
            <ul>
              <li>
                <Link to='/'>Home</Link>
              </li>
            </ul>
          </nav>
          <Route path='/' exact>
            <CategoryList />
          </Route>
          <Route 
            path='/category/:category_name?'
            render={routeProps => <Quote {...routeProps} />}>
          </Route>
          {/* <Route>
            path='/category/:category_name' component={Quote}
          </Route> */}
        </Router>
      </div>
    );
}

export default App;

// changeCategory = (category) => {
//   this.setState({
//       category
//   });
// };

// changeCategory = category => {
//   this.setState({
//       category
//   });
// };

// changeCategory = () => {
//   this.setState({
//       category: "dev"
//   });
// };