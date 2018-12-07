import React, { Component } from 'react';
import '../styles/Card.css';
import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';
import _ from 'lodash';
import CVEducation from './CVEducation';
import AnimatedTitle from './AnimatedTitle.js';
import WorkExperienceItem from './WorkExperienceItem.js';

class CVBlock extends Component {
  state = {
    isVisible: true,
    class: 'closed__arrow',
    isOpen: false
  };

  renderWorkExperienceItem = (work) => {
    return(
      <WorkExperienceItem workExperience={work}/>
    );
  }

  handleClick = (e) => {
    this.setState({isOpen: !this.state.isOpen})
    if (this.state.isOpen) {
      this.setState({class: 'closed__arrow'})
    } else {
      this.setState({class: 'open__arrow'})
    }
  }

  renderEducationItem = (education, index) => {
    return(
        <CVEducation index={ index } education={ education } />
    );
  }

  render() {
    return (
      <div>
        <AnimatedTitle title="Work Experience" />
        <Timeline lineColor={'#ddd'}>
          {_.map(this.props.workExperience, this.renderWorkExperienceItem)}
        </Timeline>
        <AnimatedTitle title="Skills" />
        <Timeline lineColor={'transparent'}>
          <TimelineItem
            key="001"
            dateStyle={{ visibility: 'hidden' }}
            style={{ visibility: 'hidden' }}
            bodyContainerStyle={{
              background: '#a9aaad',
              width: '52vw',
              padding: '20px',
              borderRadius: '8px',
              boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
            }}
          >
            <h3>work.company</h3>
            <h4>work.role</h4>
            <p>
              work.description
            </p>
          </TimelineItem>
        </Timeline>
        <AnimatedTitle title="Education" />
        <Timeline lineColor={'#ddd'}>
          {_.map(this.props.academicExperience, this.renderEducationItem)}
        </Timeline>
    </div>
    );
  }
}

export default CVBlock;
