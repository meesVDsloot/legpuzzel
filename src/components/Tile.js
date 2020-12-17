import * as React from 'react';
import Draggable from 'react-draggable'
export class Tile extends React.Component {

  constructor(props) {
    super(props);
    this.state={
      name: this.props.name,
      imageLocX: this.props.imageLocX,
      imageLocY: this.props.imageLocY
    }
  }

  handleStop = (event) => {
    console.log("gestopt")
    this.setState({
      imageLocX: event.screenX,
      imageLocY: event.screenY
    })
    console.log(this.state)
  }

  render() {
    return (
      <Draggable
        onStop={this.handleStop}>
        <div className={this.props.className}>
        </div>
      </Draggable>
    )
  }
}

export default Tile;
