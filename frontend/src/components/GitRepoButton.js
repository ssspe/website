import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardHeader} from 'reactstrap';
import { Row, Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Card.css';
import DelayLink from '../components/DelayLink.js'

class GitRepoButton extends Component {
  state = {
    isVisible: true,
  };

  render() {
    return (
      <DelayLink to={ '/gitrepos/' + this.props.repo.name } delay={800} onDelayStart={this.props.setter.bind(this, this.props.index)} className='github__link' style={{ textDecoration: 'none' }}>
      	<Card className="github__card">
      		<Row className='row no-gutters'>
      			<Col xs='3' >
  	    			<CardImg height="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap"/>
  	    		</Col>
  	    		<Col xs='9' >
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
