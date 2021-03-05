import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import UserLoader from './components/UsersLoader';
import WindowSizes from './components/WindowSizes';
import Context from './components/Context';
import { MyContext } from './components/contexsts';

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
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/windowSizes'>About</Link>
              </li>

              <li>
                <Link to='/context'>Context</Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route exact path='/'>
              <UserLoader />
            </Route>
            <Route path='/windowSizes'>
              <WindowSizes />
            </Route>
            <MyContext.Provider value={this.state.user}>
              <Route path='/context'>
                <Context />
              </Route>
            </MyContext.Provider>
          </Switch>
        </Router>
      </>
    );
  }
}

export default App;
