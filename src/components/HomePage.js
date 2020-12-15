import * as React from 'react';
import Button from 'react-bootstrap/Button'
import history from '../history'

export class HomePage extends React.Component {

  handleClick() {
    history.replace('/puzzels')
  }

  render() {
    return (
      <div className="Button" variant="primary">
        <Button onClick={() => this.handleClick()}> Klik hier om naar de puzzels te gaan </Button>
      </div>
    )
  }
}

export default HomePage
