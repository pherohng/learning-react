import React from 'react';

export class ControlBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentVolumeOpacity: 0,
      bankName: 'Heater Kit'
    };

    this.play = this.play.bind(this);
    this.reset = this.reset.bind(this);
    this.changeVolume = this.changeVolume.bind(this);
    this.changeBank = this.changeBank.bind(this);
  }

  play() {
    this.props.onPlay();
  }

  reset() {
    this.props.onReset();
  }

  changeVolume(e) {
    this.props.onChangeVolume(e.target.value);

    this.setState({
      currentVolumeOpacity: 1
    });

    setTimeout(() => {
      this.setState({
        currentVolumeOpacity: 0
      });
    }, 1000);
  }

  changeBank(e) {
    this.setState({
      bankName: e.target.checked ? 'Smooth Piano Kit' : 'Heater Kit'
    });

    this.props.onChangeBank(+e.target.checked);
  }

  render() {
    let volume = this.props.volume;

    return (
      <div className='col'>
        <section id='control-bar'>
          <div className='row'>
            <div className='col'>
              <div>
                <i className={`fas ${volume === 0 ? 'fa-volume-off' : volume <= 50 ? 'fa-volume-down' : 'fa-volume-up'} mr-1`}></i>
                <span className='d-inline-block mr-1'>Volume</span>
                <span className='current-volume' style={{ 'opacity': this.state.currentVolumeOpacity }}>
                  {volume}
                </span>
              </div>
              <div className='volume-range d-flex align-items-center mb-4'>
                <input type='range' min='0' max='100' value={this.props.volume} className='slider'
                  onChange={this.changeVolume} />
                <div className='track' style={{ 'width': `${volume}%` }} />
              </div>
            </div>
          </div>

          <div className='row align-items-center'>
            <div className='col'>
              <button className='btn btn-icon' onClick={this.play}>
                <i className="fas fa-play fa-fw"></i>
              </button>

              <button className='btn btn-icon' disabled={!this.props.soundCount} onClick={this.reset}>
                <i className="fas fa-trash-alt fa-fw"></i>
              </button>
            </div>

            <div className='col d-flex flex-column align-items-end'>
              <span>
                {this.state.bankName}
              </span>

              <label className='bank-switch'>
                <input type='checkbox' onChange={this.changeBank} />
                <div className='slider' />
              </label>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
