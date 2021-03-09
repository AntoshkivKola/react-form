import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LoginPage from './Pages/LoginPage';
import SignUpPage from './Pages/SignUpPage';

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
