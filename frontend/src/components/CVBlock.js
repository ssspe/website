import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardHeader, UncontrolledCollapse} from 'reactstrap';
import { Row, Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Card.css';
import {Animated} from "react-animated-css";
import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';
import _ from 'lodash';
import CVEducation from './CVEducation';

class CVBlock extends Component {
  state = {
    isVisible: true,
    class: 'closed__arrow',
    isOpen: false
  };

  renderWorkExperienceItem = (work) => {
    return(
      <TimelineItem
        dateText={work.dateFrom + '-' + work.dateTo}
        dateInnerStyle={{ background: '#282c34', color: '#FFF' }}
        bodyContainerStyle={{
          background: '#a9aaad',
          width: '1000px',
          padding: '20px',
          borderRadius: '8px',
          boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
        }}
      >
        <h3>{work.company}</h3>
        <h4>{work.role}</h4>
        <p>
          {work.description}
        </p>
      </TimelineItem>
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
        <Timeline lineColor={'#ddd'}>
          {_.map(this.props.workExperience, this.renderWorkExperienceItem)}
        </Timeline>
        <h3> Skills </h3>
        <Timeline lineColor={'transparent'}>
          <TimelineItem
            key="001"
            dateStyle={{ visibility: 'hidden' }}
            style={{ visibility: 'hidden' }}
            bodyContainerStyle={{
              background: '#a9aaad',
              width: '1000px',
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
        <h3> Education </h3>
        <Timeline lineColor={'#ddd'}>
          {_.map(this.props.academicExperience, this.renderEducationItem)}
        </Timeline>
    </div>
    );
  }
}

export default CVBlock;
