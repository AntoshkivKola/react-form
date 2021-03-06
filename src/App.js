import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import UserLoader from './components/UsersLoader';
import WindowSizes from './components/WindowSizes';
import Context from './components/Context';
import { MyContext } from './components/contexsts';
import LoginPage from './components/Pages/LoginPage';
import SignUpPage from './components/Pages/SignUpPage';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      user: {
        id: 1,
        firstName: 'John',
        LastName: 'Doe',
        imgSrc:
          'https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg',
      },
    };
  }

  render () {
    return (
      <>
        <Router>
          <nav>
            <ul>
              <li>
                <Link to='/'>login</Link>
              </li>
              <li>
                <Link to='/signUp'>Sign-up</Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route exact path='/' component={LoginPage} />
      
            <Route path='/signUp' component={SignUpPage} />
          </Switch>
        </Router>
      </>
    );
  }
}

/* <MyContext.Provider value={this.state.user}>
<Route path='/context'>
  <Context />
</Route>
</MyContext.Provider> */

export default App;
