import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardHeader, UncontrolledCollapse} from 'reactstrap';
import { Row, Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Card.css';
import {Animated} from "react-animated-css";
import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';
import _ from 'lodash';

class CVEducation extends Component {
  state = {
    isVisible: true,
    class: 'closed__arrow',
    isOpen: false
  };

  handleClick = (e) => {
    this.setState({isOpen: !this.state.isOpen})
    if (this.state.isOpen) {
      this.setState({class: 'closed__arrow'})
    } else {
      this.setState({class: 'open__arrow'})
    }
  }

  renderGrades = (gradeArray) => {
    console.log(gradeArray.grade);
    return(
      <CardBody className='grade__cardbody'>
        {gradeArray.grade[0] + " - " + gradeArray.grade[1]}
      </CardBody>
    );
  }

  renderGrade = (grade) => {
    console.log(grade);
  }

  render() {
    const education = this.props.education;
    const index = this.props.index;

    return (
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
        <p className='cv__toggler' id={'toggler-' + index} onClick={this.handleClick}>
          <img className={this.state.class} src={require("../static/images/arrow.png")} height={20} width={20}/>
          Grades
        </p>
        <UncontrolledCollapse toggler={"#toggler-" + index}>
          <Card>
            {_.map(education.grades, this.renderGrades)}
          </Card>
        </UncontrolledCollapse>
      </TimelineItem>
    );
  }
}

export default CVEducation;
