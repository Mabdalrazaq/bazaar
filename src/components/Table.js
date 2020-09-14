import React,{useState} from 'react';
import {Container,
        Row,
        Col,
        Card,
        CardBody,
        CardImg,
        CardTitle,
        CardSubtitle,
        CardText,
        Badge,
        Button,
        Modal,
        ModalBody,
        ModalHeader,
        ModalFooter,
        Label,
        Input} from 'reactstrap';

function Table (props){

    const [confirmIsOpen,setConfirmIsOpen]=useState(false);
    const [confirmedIsOpen,setConfirmedIsOpen]=useState(false);
    const [buttonDisabled,setButtonDisabled]=useState(true);
    const [itemBeingBought,setItemBeingBought]=useState(-1);

    const toggleConfirm=()=>setConfirmIsOpen(!confirmIsOpen);
    const toggleConfirmed=()=>setConfirmedIsOpen(!confirmedIsOpen);

    const handleBuying=(item)=>{
        setItemBeingBought(item)
        toggleConfirm();
    }

    const handlePayment=()=>{
        toggleConfirm();
        toggleConfirmed();
        const item=itemBeingBought;
        
    }

    const checkConfirm=(evt)=>{
        if(evt.target.value==='buy this')
            setButtonDisabled(false);
        else
            setButtonDisabled(true);
    }

    return (
        <>
            <Modal isOpen={confirmIsOpen} toggle={toggleConfirm}>
                <ModalHeader toggle={toggleConfirm}>Confirm payment</ModalHeader>
                <ModalBody>
                    <p>You pay for this item when you recieve it, return it if it is not as displayed in pictures.</p>
                    <p>Confirming payment and then disappearing will result in you <strong>blacklisted.</strong></p>
                    <Label htmlFor='confirm' >Type <strong className='text-danger'>buy this</strong> to confirm your payment</Label>
                    <Input id='confirm' placeholder='buy this' className='mb-2' autoComplete='off' onChange={checkConfirm}></Input>
                </ModalBody>
                <ModalFooter>
                <p><small>Make sure the mobile number you provided in your account is correct, we will use it to contact you</small></p>
                <Button disabled={buttonDisabled} color='warning' onClick={handlePayment} >Confirm</Button>
                </ModalFooter>
            </Modal>
            <Modal isOpen={confirmedIsOpen} toggle={toggleConfirmed}>
                <ModalHeader toggle={toggleConfirmed}>Payment Confirmed!</ModalHeader>
                <ModalBody>
                    <h2>Your payment has been <strong>confirmed!</strong></h2>
                    <p>We will reach to you to confirm your address, and we will deliver this item to you in 2 days!</p>
                </ModalBody>
                <Button onClick={toggleConfirmed} color='warning'>Okay</Button>
            </Modal>
            <Container>
                <Row>
                    {props.table.items.map(item=>{
                        return(
                            <Col xs='12' sm='4' key='item.id' className='my-3' >
                                <Card >
                                    <CardImg width='100%' top src={item.image} alt={item.name} image cap height='300px'/>
                                    <CardBody>
                                        <CardTitle className='font-weight-bold'>{item.name}</CardTitle>
                                        <CardSubtitle><Badge pill color='info'>{item.price} JOD</Badge></CardSubtitle>
                                        <CardText className='cardTextHeight'>{item.description}</CardText>
                                    </CardBody>
                                        <Button onClick={()=>handleBuying(item)} color={item.available?'warning':'secondary'} disabled={!item.available} block>{item.available? 'Buy this':'Sold'}</Button>
                                </Card>
                            </Col>
                        )
                    })}
                </Row>
            </Container>

        </>
    )

}

export default Table;