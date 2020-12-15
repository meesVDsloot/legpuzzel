import * as React from 'react'
import Button from 'react-bootstrap/Button'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/Navbar'
import Form from 'react-bootstrap/Navbar'
import FormControl from 'react-bootstrap/Navbar'

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
