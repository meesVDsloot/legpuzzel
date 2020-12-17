import * as React from 'react'
import mole from '../assets/mole.png'
import Button from 'react-bootstrap/Button'
import snapFitFunction1 from '../snapfit.js'

const snapJs = (yourScriptPath) => {
  const script = document.createElement("script");
  script.src = yourScriptPath
  script.async = true;
  document.body.appendChild(script);
}


export class PuzzelSnapfit extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

    }
  }

  componentDidMount(){
    console.log("component mounted")
    snapJs("./snapfit.js")
    this.setState({image: {mole}});
  }

  handleClick() {
    console.log("arg")
    snapFitFunction1()
  }

  render(){
    window.addEventListener('load', (event) => {
      console.log("load event")
    });

    return (
      <div>
      <Button onClick={() => this.handleClick()}> Klik hier om naar de puzzels te gaan </Button>

        <h2>Demonstration</h2>
        <div><img src={mole} onLoad={this.snapFitFunction1} />

        </div>
      </div>
    );
  }
}

export default PuzzelSnapfit
