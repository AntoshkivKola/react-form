import React, { Component } from 'react';
import PropTypes from 'prop-types';
// '../users.json'
fetch('./users.json')
  .then(response => response.json())
  .then(user => {
    console.table(user);
  });

class UserLoader extends Component {
  constructor (props) {
    super(props);
    this.state = {
      users: [],
      isFetching: true,
      isError: false,
      currentPage: 1,
    };
  }

  componentDidMount () {
    this.load();
  }

  componentDidUpdate (prevProps, prevState) {
    if(prevState.currentPage !== this.state.currentPage){
      this.load();
    }
   
  }

  load = () => {
    const { currentPage } = this.state;
    fetch(
      `https://randomuser.me/api/?results=25&page=${currentPage}&seed=fe2020-2`
    )
      .then(response => response.json())
      .then(data => {
        console.dir(data.results);
        return this.setState({ users: data.results });
      })
      .catch(() => {
        this.setState({ isError: true });
      })
      .finally(() => {
        this.setState({ isFetching: false });
      });
  };

  prevPage = () =>
    this.setState(state => {
      return { currentPage: state.currentPage - 1 };
    });
  nextPage = () =>
    this.setState(state => {
      return { currentPage: state.currentPage + 1 };
    });

  render () {
    const { users, isFetching, isError } = this.state;
    if (isError) {
      return <div>ERROR</div>;
    }

    if (isFetching) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <h1>User List</h1>
        <button onClick={this.prevPage}>prev page</button>
        <button onClick={this.nextPage}>next page</button>
        <ul>
          {users.map(user => (
            <li key={user.login.uuid}>{JSON.stringify(user)}</li>
          ))}
        </ul>
      </div>
    );
  }
}
UserLoader.propTypes = {};
export default UserLoader;
