import React from 'react';

export class Display extends React.Component {
  render() {
    return (
      <div className='col'>
        <section id='display'>
          {this.props.text}
        </section>
      </div>
    );
  }
}
