import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Image, ListGroup,  } from 'react-bootstrap'
import projects from '../projects'

const ProjectScreen = ({ match }) => {
    const product = projects.find((p) => p._id === match.params.id)
    return (
        <>
            <Link className='btn btn-light my-3' to='/'>
                Go Back
            </Link>
            <Row>
                <Col md={6}>
                    <Image src={product.image} alt={product.name} fluid />
                </Col>
                <Col md={6}>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                            <h3>{product.name}</h3>
                       
                            
                        </ListGroup.Item>
                   
                        <ListGroup.Item>Description: {product.description}</ListGroup.Item>
                    </ListGroup>
                </Col>
                
            </Row>
        </>
    )
}

export default ProjectScreen
