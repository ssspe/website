import React, { Component } from 'react';
import VisibilitySensor from 'react-visibility-sensor';
import '../styles/AnimatedTitle.css';

export default class AnimatedTitle extends Component {
  constructor(props) {
    super(props);
    this.onVisibilitySensorChange = this.onVisibilitySensorChange.bind(this);
    this.state = { visible: false };
  }

  onVisibilitySensorChange(isVisible) {
    this.setState({ visible: isVisible });
  }

  render() {
    const visible = this.state.visible;
    return (
      <VisibilitySensor
          partialVisibility = {true}
          onChange={this.onVisibilitySensorChange} >
        <div className={'title' + (visible ? ' zoom-in' : ' is-hidden')}>
          <h3 >{this.props.title}</h3>
        </div>
      </VisibilitySensor>
    );
  }
}
