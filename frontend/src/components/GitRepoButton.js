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
    this.state = { visible: false };
  }

  onVisibilitySensorChange(isVisible) {
    this.setState({ visible: isVisible });
  }

  doesFileExist = () => {
    try {
      return require("../static/images/" + this.props.repo.name + ".gif")
    }
    catch(err) {
      return 'https://via.placeholder.com/320x200';
    }
  }

  render() {
    const visible = this.state.visible;
    const { repo } = this.props;

    return (
      <VisibilitySensor
        partialVisibility={ true }
        onChange={ this.onVisibilitySensorChange } >
        <Link to={ '/gitrepos/' + repo.name } className='github__link' style={{ textDecoration: 'none' }}>
        	<Card className={'github__card' + (visible ? ' zoom-in' : ' is-hidden')}>
        		<Row className='row no-gutters'>
        			<Col xs='3' >
    	    			<CardImg height="100%" src={this.doesFileExist()} alt="Card image cap"/>
    	    		</Col>
    	    		<Col xs='9' >
                <CardHeader>{repo.name}</CardHeader>
    		    		<CardBody>
    		    			<CardTitle>{'Language: ' + repo.language}</CardTitle>
    		    			<CardText>{repo.description}</CardText>
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
