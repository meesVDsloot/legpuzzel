import * as React from 'react';
import mole from '../assets/mole.png'
import Draggable from 'react-draggable'
export class Tile extends React.Component {

  constructor(props) {
    super(props);
    this.state={
      name: this.props.name,
      imageLoc: this.props.imageLoc
    }
  }

  handleStop = (event) => {
    console.log(this.state)
    console.log("gestopt")
  }

  render() {
    return (
      <Draggable
        onStop={this.handleStop}>
        <div className={this.props.className} onClick={this.props.onClick}>
        </div>
      </Draggable>
    )
  }
}

export default Tile;
