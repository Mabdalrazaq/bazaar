import React from 'react';
import {Card,
        CardImg,
        CardBody,
        CardImgOverlay,
        CardHeader,
        CardTitle,
        CardText,
        Container,
        Col,
        Row,
        Collapse,
        Button
    } from 'reactstrap'

import {Accordion} from 'react-bootstrap'
function About (props){
    return(
        <Container >
            <Accordion defaultActiveKey="0">
                <Card>
                    <CardHeader>
                        <Accordion.Toggle className='bg-warning text-dark btn-outline-warning btn-block' as={Button} variant="link" eventKey="0">
                            Idea
                        </Accordion.Toggle>
                    </CardHeader>
                    <Accordion.Collapse eventKey="0">
                        <CardBody>
                            <>
                                <p>Bazaar is a website that is designed to emulate the real world traditional idea of bazaars, we focus on capturing every element that makes the bazaar the wondrous and magical place that brings people together.</p>
                                <p>The idea was originally created to help talented people bringing their products to the online world without capitalizing on them, the transaction between the merchant and customer is in peer to peer fashion the website only charges for the table rent, the website also allows the merchants to decorate their tables as they see fit from various supported features.</p>
                            </>
                        </CardBody>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <CardHeader>
                        <Accordion.Toggle className='bg-warning text-dark btn-outline-warning btn-block' as={Button} variant="link" eventKey="1">
                            How to participate
                        </Accordion.Toggle>
                    </CardHeader>
                    <Accordion.Collapse eventKey="1">
                        <CardBody>
                            <p>You can either participate in the Bazaar as a merchant or as a customer, merchants have the ability to rent tables to market their products, our website supports a maximum of 10 tables each day so merchants will have to race their way to reserve a table, all tables will be emptied after 24 hours and the process repeats, on the other hand customers have the ability to view the tables, and if their eyes catch an interesting table, they have the ability to enter the table to view more details and make transactions.</p>
                        </CardBody>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <CardHeader>
                        <Accordion.Toggle className='bg-warning text-dark btn-outline-warning btn-block' as={Button} variant="link" eventKey="2">
                            Shoping process
                        </Accordion.Toggle>
                    </CardHeader>
                    <Accordion.Collapse eventKey="2">
                        <CardBody>
                            <p>You can either participate in the Bazaar as a merchant or as a customer, merchants have the ability to rent tables to market their products, our website supports a maximum of 10 tables each day so merchants will have to race their way to reserve a table, all tables will be emptied after 24 hours and the process repeats, on the other hand customers have the ability to view the tables, and if their eyes catch an interesting table, they have the ability to enter the table to view more details and make transactions.</p>
                        </CardBody>
                    </Accordion.Collapse>
                </Card>
            </Accordion>      
        </Container>
    )
}

export default About;