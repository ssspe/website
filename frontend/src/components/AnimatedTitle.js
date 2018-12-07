import React, { Component } from 'react';
import VisibilitySensor from 'react-visibility-sensor';
import '../styles/AnimatedTitle.css';

class AnimatedTitle extends Component {
  constructor(props) {
    super(props);
    this.onVisibilitySensorChange = this.onVisibilitySensorChange.bind(this);
    this.state = { visible: false };
  }

  onVisibilitySensorChange(isVisible) {
    if (isVisible) {
      this.setState({ visible: true });
    }
  }

  render() {
    const visible = this.state.visible;
    console.log(visible);
    const {
      title,
      visibilitySensorProps,
    } = this.props;
    return (
      <VisibilitySensor
          {...visibilitySensorProps}
          onChange={this.onVisibilitySensorChange} >
        <div className={'title' + (visible ? ' zoom-in' : ' is-hidden')}>
          <h3 >{this.props.title}</h3>
        </div>
      </VisibilitySensor>
    );
  }
}

export default AnimatedTitle;
