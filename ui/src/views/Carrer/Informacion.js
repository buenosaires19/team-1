import React, { Component } from 'react';
import { Player } from 'video-react';
import video  from '../../videos/carrera.mp4'
export default class Informacion extends Component {
  render() {

    return (
      <div>
        <p>
            {this.props.info}
        </p>
        <Player
            playsInline
            poster="/assets/poster.png"
            src={video}
        />
      </div>
    )
  }
}
