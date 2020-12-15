import * as React from 'react';
import mole from '../assets/mole.png'
import $ from 'jquery';
import {Helmet} from 'react-helmet'
import Card from 'react-bootstrap/Card'
import 'jquery-ui';
import Board from "./Board"
export class Puzzel extends React.Component {

  constructor(props) {
    let pathArray = window.location.pathname.split("=")
    console.log(pathArray[1])
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
          <Helmet>
          </Helmet>

        <div id="pieceContainer">
          <img src={mole} />
         </div>

        <div id="puzzleContainer">
            <Board name={this.state.name}/>

        </div>

        <ul id="buttons">
          <li><button id="btnStart">start</button></li>
          <li><button id="btnReset">reset</button></li>
        </ul>

      </div>
    )
  }
}

export default Puzzel;
