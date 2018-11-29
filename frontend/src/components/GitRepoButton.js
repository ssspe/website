import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class GitRepoButton extends Component {

  render() {
    return (
    	<Card> 
    		<Row>
    			<Col>
	    			<CardImg src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
	    		</Col>
	    		<Col>
		    		<CardBody>
		    			<CardTitle>{this.props.repo.name}</CardTitle>
		    			<CardSubtitle>{'Language: ' + this.props.repo.language}</CardSubtitle>
		    			<CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
		    			<Button>Button</Button>
		    		</CardBody>
	    		</Col>
	    	</Row>
    	</Card> 
    );
  }
}

export default GitRepoButton;