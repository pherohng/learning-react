import React from 'react';

export class DrumPad extends React.Component {
  constructor(props) {
    super(props);

    this.click = this.click.bind(this);
  }

  click() {
    let drumPad = this.props.drumPad;

    this.props.onUpdateDisplay(drumPad.description);
    this.props.onCollectSounds(drumPad.key);

    document.querySelector(`#${drumPad.key}`).play();
  }

  render() {
    let drumPad = this.props.drumPad;

    return (
      <div className='col'>
        <div id={drumPad.id} className='drum-pad' onClick={this.click}>
          <audio id={drumPad.key} src={drumPad.soundUrl} className='clip' />
          {drumPad.key}
        </div>
      </div>
    );
  }
}
