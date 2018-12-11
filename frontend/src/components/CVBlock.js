import React, { Component } from 'react';
import '../styles/Card.css';
import { Timeline }  from 'vertical-timeline-component-for-react';
import _ from 'lodash';
import CVEducation from './CVEducation';
import AnimatedTitle from './AnimatedTitle.js';
import WorkExperienceItem from './WorkExperienceItem.js';

export default class CVBlock extends Component {
  renderEducationItem = (education, index) => {
    return(
      <CVEducation index={ index } education={ education } />
    );
  }

  renderWorkExperienceItem = (work) => {
    return(
      <WorkExperienceItem workExperience={work}/>
    );
  }

  render() {
    return (
      <div>
        <AnimatedTitle title="Work Experience" />
        <Timeline lineColor={'#ddd'}>
          {_.map(this.props.workExperience, this.renderWorkExperienceItem)}
        </Timeline>
        <AnimatedTitle title="Education" />
        <Timeline lineColor={'#ddd'}>
          {_.map(this.props.academicExperience, this.renderEducationItem)}
        </Timeline>
    </div>
    );
  }
}
