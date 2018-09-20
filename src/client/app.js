import React from 'react';
import UserDetails from './userDetails'

class App extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <div>
        <div>Header</div>
        <UserDetails handleSubmit={this.handleSubmit}>test</UserDetails>
        <div>Footer</div>
      </div>
    )
  }

  handleSubmit() {
    console.log('lol');
  }
}

export default App