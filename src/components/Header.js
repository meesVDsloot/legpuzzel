import * as React from 'react'
import Navbar from 'react-bootstrap/Navbar'

export class Header extends React.Component {

  constructor(props) {
    super(props);
    this.state={}
  }

  render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="/home">
            Home
          </Navbar.Brand>
        </Navbar>
      </div>
    );
  }
}

export default Header
