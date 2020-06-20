import React from 'react';

import { BANKS } from '../constants';
import { Display } from './Display';
import { ControlBar } from './ControlBar';
import { DrumPads } from './DrumPads';

export class DrumMachine extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      displayText: 'Drum Machine',
      bankIndex: 0,
    };

    this.updateDisplay = this.updateDisplay.bind(this);
  }

  updateDisplay(text) {
    this.setState({
      displayText: text
    });
  }

  render() {
    return (
      <div className='col-md-8 col-lg-4 col-xl-3'>
        <main id='drum-machine'>
          <div className='row flex-column'>
            <Display text={this.state.displayText} />
            <ControlBar />
            <DrumPads drumPads={BANKS[this.state.bankIndex]} onUpdateDisplay={this.updateDisplay} />
          </div>
        </main>
      </div>
    );
  }
}
