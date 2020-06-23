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
      sounds: [],
      volume: 50,
      bankIndex: 0
    };

    this.updateDisplay = this.updateDisplay.bind(this);
    this.collectSounds = this.collectSounds.bind(this);
    this.changeVolume = this.changeVolume.bind(this);
    this.changeBank = this.changeBank.bind(this);
    this.play = this.play.bind(this);
    this.reset = this.reset.bind(this);
  }

  updateDisplay(text) {
    this.setState({
      displayText: text
    });
  }

  collectSounds(drumPadKey) {
    this.setState((state) => ({
      sounds: [...state.sounds, drumPadKey]
    }));
  }

  changeVolume(volume) {
    this.setState({
      volume
    });
  }

  changeBank(bankIndex) {
    this.setState({
      bankIndex
    });
  }

  play() {
    this.state.sounds.forEach(drumPadKey => {
      setTimeout(() => {
        let audio = document.querySelector(`#${drumPadKey}`);
        audio.play();
      }, 1000);
    });
  }

  reset() {
    this.setState({
      sounds: []
    });
  }

  render() {
    return (
      <div className='col-md-8 col-lg-4 col-xl-3'>
        <main id='drum-machine'>
          <div className='row flex-column'>
            <Display text={this.state.displayText} />
            <ControlBar soundCount={this.state.sounds.length} volume={this.state.volume}
              onChangeVolume={this.changeVolume} onChangeBank={this.changeBank}
              onPlay={this.play} onReset={this.reset} />
            <DrumPads drumPads={BANKS[this.state.bankIndex]}
              onUpdateDisplay={this.updateDisplay} onCollectSounds={this.collectSounds} />
          </div>
        </main>
      </div>
    );
  }
}
