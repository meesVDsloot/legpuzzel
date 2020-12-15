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


          <div class="container mt-5">
            <div class="row">
              <div class="col-md">
                <CardComponent name="mole" imageUri={mole}/>
              </div>
              <div class="col-md">
                <CardComponent name="grass" imageUri={grass}/>
              </div>
              <div class="col-md">
                <CardComponent name="mole" imageUri={mole}/>
              </div>
            </div>
          </div>

          <div class="container mt-5">
            <div class="row">
              <div class="col-md">
                <CardComponent name="mole" imageUri={mole}/>
              </div>
              <div class="col-md">
                <CardComponent name="grass" imageUri={grass}/>
              </div>
              <div class="col-md">
                <CardComponent name="mole" imageUri={mole}/>
              </div>
            </div>
          </div>
      </>
    )
  }
}

export default App;
