import React from 'react';

class UserDetails extends React.Component {
  constructor(props) {
    super(props);

    this.state = {firstName: '', lastName: ''}

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    console.log('123')
    this.setState({firstName: 'Tony', lastName: 'lol'})
  }

  render() {
    return (
    <form onSubmit={this.props.handleSubmit}>
      <label htmlFor="firstName">
        First name:
        <input value={this.state.firstName} type="text" id="firstName" name="firstName" onChange={this.handleChange} />
      </label>
      <label htmlFor="lastName">
        Last name:
        <input value={this.state.lastName} type="text" id="lastName" name="lastName" onChange={this.handleChange} />
      </label>
      <label htmlFor="team">
        Which team are you joining?
        <input type="text" id="team" name="team"/>
      </label>
      <label htmlFor="macAddress">
        What is your MAC address?
        <input type="text" id="macAddress" name="macAddress"/>
      </label>
      <input type="submit" value="Go" />
    </form>
    );
  }
}

export default UserDetails