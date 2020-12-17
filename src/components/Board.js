import * as React from 'react'
import Tile from './Tile'

export class Board extends React.Component {

  render(){
    return (
      <div className="tileBoard">
        <Tile name={this.props.name} imageLocX={1} imageLocY={1} className="square img_1-1"/>
        <Tile name={this.props.name} imageLocX={1} imageLocY={1} className="square img_1-2"/>
        <Tile name={this.props.name} imageLocX={1} imageLocY={1} className="square img_1-3"/>
        <Tile name={this.props.name} imageLocX={1} imageLocY={1} className="square img_2-1"/>
        <Tile name={this.props.name} imageLocX={1} imageLocY={1} className="square img_2-2"/>
        <Tile name={this.props.name} imageLocX={1} imageLocY={1} className="square img_2-3"/>
        <Tile name={this.props.name} imageLocX={1} imageLocY={1} className="square img_3-1"/>
        <Tile name={this.props.name} imageLocX={1} imageLocY={1} className="square img_3-2"/>
        <Tile name={this.props.name} imageLocX={1} imageLocY={1} className="square img_3-3"/>
      </div>
    )
  }
}

export default Board
