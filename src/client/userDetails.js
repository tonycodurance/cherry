import React from 'react';

const UserDetails = () => (
  <form>
    <label htmlFor="firstName">
      First name:
      <input type="text" id="firstName" name="firstName" />
    </label>
    <label htmlFor="lastName">
      Last name:
      <input type="text" id="lastName" name="lastName"/>
    </label>
    <label htmlFor="team">
      Which team are you joining?
      <input type="text" id="team" name="team"/>
    </label>
    <label htmlFor="macAddress">
      What is your MAC address?
      <input type="text" id="macAddress" name="macAddress"/>
    </label>
    <input type="submit" value="Go"/>
  </form>
)

export default UserDetails