import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardHeader} from 'reactstrap';
import { Row, Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Card.css';
import {Link} from 'react-router-dom';
import VisibilitySensor from 'react-visibility-sensor';

class GitRepoButton extends Component {
  constructor(props) {
    super(props);
    this.onVisibilitySensorChange = this.onVisibilitySensorChange.bind(this);
    this.state = { visible: false, isVisible: true };
  }

  onVisibilitySensorChange(isVisible) {
    if (isVisible) {
      this.setState({ visible: true });
    }
  }

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
    const visible = this.state.visible;

    return (
      <VisibilitySensor
          onChange={this.onVisibilitySensorChange} >
        <Link to={ '/gitrepos/' + this.props.repo.name } className='github__link' style={{ textDecoration: 'none' }}>
        	<Card className={'github__card' + (visible ? ' zoom-in' : ' is-hidden')}>
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
        </Link>
      </VisibilitySensor>
    );
  }
}

export default GitRepoButton;
