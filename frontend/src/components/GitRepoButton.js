import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, CardHeader} from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Card.css';
import { Link } from 'react-router-dom'
import styled from 'styled-components';
import DelayLink from '../components/DelayLink.js'

class GitRepoButton extends Component {
  state = {
    isVisible: true,
  };

  render() {
    console.log(this.props.repo);
    return (
      <DelayLink to={ '/gitrepos/' + this.props.repo.name } delay='800' onDelayStart={this.props.setter} className='github__link' style={{ textDecoration: 'none' }}>
      	<Card className="github__card">
      		<Row className='row no-gutters'>
      			<Col xs='3' justifyContent="center">
  	    			<CardImg height="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap"/>
  	    		</Col>
  	    		<Col xs='9' justifyContent="center">
              <CardHeader>{this.props.repo.name}</CardHeader>
  		    		<CardBody>
  		    			<CardTitle>{'Language: ' + this.props.repo.language}</CardTitle>
  		    			<CardText>{this.props.repo.description}</CardText>
  		    		</CardBody>
  	    		</Col>
  	    	</Row>
      	</Card>
      </DelayLink>
    );
  }
}

export default GitRepoButton;
