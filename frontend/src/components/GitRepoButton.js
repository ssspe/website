import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Card.css';
import { Link } from 'react-router-dom'
import styled from 'styled-components';

class GitRepoButton extends Component {

  render() {
    return (
      <Link to={ '/gitrepos/' + this.props.repo.name } className='github__link' style={{ textDecoration: 'none' }}>
      	<Card className="github__card">
      		<Row >
      			<Col xs="3">
  	    			<CardImg height="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap"/>
  	    		</Col>
  	    		<Col xs="9">
  		    		<CardBody>
  		    			<CardTitle>{this.props.repo.name}</CardTitle>
  		    			<CardSubtitle>{'Language: ' + this.props.repo.language}</CardSubtitle>
  		    			<CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
  		    		</CardBody>
  	    		</Col>
  	    	</Row>
      	</Card>
      </Link>
    );
  }
}

export default GitRepoButton;
