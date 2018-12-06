import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardHeader, UncontrolledCollapse} from 'reactstrap';
import { Row, Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Card.css';
import {Animated} from "react-animated-css";
import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';
import _ from 'lodash';

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

  renderEducationItem = (education) => {
    return(
        <TimelineItem
          dateText={education.dateFrom + '-' + education.dateTo}
          dateInnerStyle={{ background: '#282c34', color: '#FFF' }}
          bodyContainerStyle={{
            background: '#a9aaad',
            width: '1000px',
            padding: '20px',
            borderRadius: '8px',
            boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
          }}
        >
          <h3>{education.institute}</h3>
          <h4>{education.level}</h4>
          <p id="toggler" onClick={this.handleClick}>
            <img className={this.state.class} src={require("../static/images/arrow.png")} height={20} width={20}/>
            Grades
          </p>
          <UncontrolledCollapse toggler="#toggler">
            <Card>
              <CardBody>
                {education.grade}
                {education.description}
              </CardBody>
            </Card>
          </UncontrolledCollapse>
        </TimelineItem>
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
