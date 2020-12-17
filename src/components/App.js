import * as React from 'react';
import Header from './Header'
import CardComponent from './Card'
import {Helmet} from 'react-helmet'
import mole from '../assets/mole.png'
import grass from '../assets/grass.png'

export class App extends React.Component {
  render() {
    return (
      <>


          <div className="container mt-5">
            <div className="row">
              <div className="col-md">
                <CardComponent name="mole" imageUri={mole}/>
              </div>
              <div className="col-md">
                <CardComponent name="grass" imageUri={grass}/>
              </div>
              <div class="col-md">
                <CardComponent name="mole" imageUri={mole}/>
              </div>
            </div>
          </div>

          <div className="container mt-5">
            <div className="row">
              <div className="col-md">
                <CardComponent name="mole" imageUri={mole}/>
              </div>
              <div className="col-md">
                <CardComponent name="grass" imageUri={grass}/>
              </div>
              <div className="col-md">
                <CardComponent name="mole" imageUri={mole}/>
              </div>
            </div>
          </div>
      </>
    )
  }
}

export default App;
