import * as React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import history from '../history'
export class CardComponent extends React.Component {

  handleClick(namePuzzle) {
    history.replace('/gekozenPuzzel/puzzelName=' + namePuzzle)
  }

  render() {
    return (
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={this.props.imageUri} />
        <Card.Body>
          <Card.Title>{this.props.name} puzzel</Card.Title>
          <Button onClick={() => this.handleClick(this.props.name)} variant="primary">Kies {this.props.name} als puzzel</Button>
        </Card.Body>
      </Card>
    )
  }
}

export default CardComponent
