import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardHeader} from 'reactstrap';
import { Row, Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Card.css';
import DelayLink from '../components/DelayLink.js'
import {Animated} from "react-animated-css";

class GitRepoButton extends Component {
  state = {
    isVisible: true,
  };

  doesFileExist = () => {
    try {
      console.log("../static/images/" + this.props.repo.name + ".png")
      return require("../static/images/" + this.props.repo.name + ".gif")
    }
    catch(err) {
      return null;
    }
  }

  setter1 = () => {
    this.setState({ isVisible: false })
  }
  render() {
    this.doesFileExist();
    return (
      <DelayLink to={ '/gitrepos/' + this.props.repo.name } delay={800} onDelayEnd={this.props.setter1} onDelayStart={this.props.setter.bind(this, this.props.index)} className='github__link' style={{ textDecoration: 'none' }}>
      <Animated animationIn="bounceInUp" animationOut={"fadeOut"} isVisible={this.state.isVisible}>
      	<Card className="github__card">
      		<Row className='row no-gutters'>
      			<Col xs='3' >
  	    			<CardImg height="100%" src={this.doesFileExist() ? this.doesFileExist() : 'https://via.placeholder.com/320x200'} alt="Card image cap"/>
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
        </Animated>
      </DelayLink>
    );
  }
}

export default GitRepoButton;
