import React, { Component } from 'react';

export default class ColorSelector extends Component {

  handleClick (event) {
    this.props.selectColor(event.target.dataset.color)
  }

  makeColorSwatches = () => (
    ["#F00", "#F80", "#FF0", "#0F0", "#00F", "#508", "#90D", "#FFF", "#000"].map((str, idx) => {
      return <div onClick={this.handleClick.bind(this)} key={idx} className="color-swatch" data-color={str} style={{backgroundColor: str}}/>
    })
  )

  render() {
    return (
      <div id="colorSelector">
        {this.makeColorSwatches()}
      </div>
    )
  }

}
