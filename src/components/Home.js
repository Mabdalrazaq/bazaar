import React from 'react';
import {Card,
        CardBody,
        CardHeader,
        Container,
        Col,
        Row
    } from 'reactstrap'

function Home (props){
    return(
        <Container>
            <Row>
                <Col xs='12' className='text-center mb-5 mt-5'>
                    <h1>Welcome to Bazaar!</h1>
                    <h6>The wonders of people are one click away.</h6>
                </Col>
            </Row>
            <Row className='justify-content-center background-1 align-items-center'>
                <Col xs='12' sm='10' md='8' lg='4'>
                    <Card className='bg-warning mb-5 opac'>
                        <CardHeader><h2>What is Bazaar</h2></CardHeader>
                        <CardBody>
                            <h3>Bazaar is a platform for talented and creative innovators to market thier products with a magical touch of culture.</h3>
                        </CardBody>
                    </Card>
                </Col>
                <Col xs='12' sm='10' md='8' lg='4'>
                    <Card className='bg-warning mb-5 opac'>
                        <CardHeader><h2>Our Mission</h2></CardHeader>
                        <CardBody>
                            <h3>Bazaar is a platform for talented and creative innovators to market thier products with a magical touch of culture.</h3>
                        </CardBody>
                    </Card>
                </Col>
                <Col xs='12' sm='10' md='8' lg='4'>
                    <Card className='bg-warning mb-5 opac'>
                        <CardHeader><h2>What is Bazaar</h2></CardHeader>
                        <CardBody>
                            <h3>Bazaar is a platform for talented and creative innovators to market thier products with a magical touch of culture.</h3>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Home;