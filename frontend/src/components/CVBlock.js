import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardHeader} from 'reactstrap';
import { Row, Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Card.css';
import {Animated} from "react-animated-css";
import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';
import _ from 'lodash';

class CVBlock extends Component {
  state = {
    isVisible: true,
  };

  renderTimeLineItem = (work) => {
    return(
      <TimelineItem
        key="001"
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

  render() {
    return (
      <div>
        <Timeline lineColor={'#ddd'}>
          {_.map(this.props.workExperience, this.renderTimeLineItem)}
          <TimelineItem
            key="001"
            dateStyle={{ visibility: 'hidden' }}
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
    </div>
    );
  }
}

export default CVBlock;
