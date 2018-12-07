import React, { Component } from 'react';
import { Card, CardBody, UncontrolledCollapse} from 'reactstrap';
import '../styles/Card.css';
import { TimelineItem }  from 'vertical-timeline-component-for-react';
import _ from 'lodash';

export default class CVEducation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: true,
      class: 'closed__arrow',
      isOpen: false
    };
  }

  handleClick = (e) => {
    this.setState({isOpen: !this.state.isOpen})
    this.setState({class: this.state.isOpen ? 'closed__arrow' : 'open__arrow'})
  }

  renderGrades = (gradeArray) => {
    return(
      <CardBody className='grade__cardbody'>
        {gradeArray.grade[0] + " - " + gradeArray.grade[1]}
      </CardBody>
    );
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
          width: '52vw',
          padding: '20px',
          borderRadius: '8px',
          boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
        }}
      >
        <h3>{education.institute}</h3>
        <h4>{education.level}</h4>
        <p className='cv__toggler' id={'toggler-' + index} onClick={this.handleClick}>
          {education.gradesTitle === "Grades"
          ? <img
          className={this.state.class}
          src={require("../static/images/arrow.png")}
          alt="Arrow"
          height={20} width={20}/>
          : null }
          {education.gradesTitle}
        </p>
        {education.gradesTitle === "Grades"
        ? <UncontrolledCollapse toggler={"#toggler-" + index}>
          <Card>
            {_.map(education.grades, this.renderGrades)}
          </Card>
        </UncontrolledCollapse>
        : null }
      </TimelineItem>
    );
  }
}
