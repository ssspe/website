import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardHeader, UncontrolledCollapse} from 'reactstrap';
import { Row, Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/WorkExperienceItem.css';
import {Animated} from "react-animated-css";
import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';
import _ from 'lodash';

class workExperienceItem extends Component {
  render() {
    const work = this.props.workExperience;

    return (
      <TimelineItem
        dateText={work.dateFrom + '-' + work.dateTo}
        dateInnerStyle={{ background: '#282c34', color: '#FFF' }}
        bodyContainerStyle={{
          background: '#a9aaad',
          width: '52vw',
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
}

export default workExperienceItem;
