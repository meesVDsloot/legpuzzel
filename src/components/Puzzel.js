import * as React from 'react';
import mole from '../assets/mole.png'
import 'jquery-ui';
import Board from "./Board"
export class Puzzel extends React.Component {

  constructor(props) {
    let pathArray = window.location.pathname.split("=")
    super(props);
    this.state={
      name: pathArray[1]
    }
  }

  handleClick() {
  }


  render() {
    return (
      <div id="container">

        <div id="pieceContainer">
          <img src={mole} />
         </div>

        <div id="puzzleContainer">
            <Board name={this.state.name}/>

        </div>
      </div>
    )
  }
}

export default Puzzel;
