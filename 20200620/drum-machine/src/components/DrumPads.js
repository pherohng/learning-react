import React from 'react';

import { DrumPad } from './DrumPad';

export class DrumPads extends React.Component {
  constructor(props) {
    super(props);

    this.updateDisplay = this.updateDisplay.bind(this);
  }

  updateDisplay(text) {
    this.props.onUpdateDisplay(text);
  }

  render() {
    return (
      <div className='col'>
        <section id='drum-pads'>
          <div className='row row-cols-3'>
            {
              this.props.drumPads.map(drumPad => {
                return (
                  <DrumPad key={drumPad.id} drumPad={drumPad} onUpdateDisplay={this.updateDisplay} />
                );
              })
            }
          </div>
        </section>
      </div>
    );
  }
}
