import React,{Component,useState} from 'react';
import {Row,
        Col,
        Container,
        Card,
        CardBody,
        CardImg,
        CardSubtitle,
        CardText,
        CardTitle,
        Badge,
        Button,
        Label,
        Modal,
        ModalBody,
        ModalHeader,
        Tooltip} from 'reactstrap'

import {required,maxLength,isNumber} from '../util/validators';

import {LocalForm,
        Control,
        Errors} from 'react-redux-form'

class Sell extends Component{
    constructor(props){
        super(props);
        this.state={
            item:{},
            editing: false,
            tooltips:{
                name: false,
                price: false,
                description: false,
                image: false
            }
        }
    }
    render(){

        const toggleTooltip=(type)=>this.setState({tooltips:{...this.state.tooltips,[type]:!this.state.tooltips[type]}});

        const getItem=(itemId)=>{
            return this.props.table.items.find(item=>item.id===itemId);
        }


        const handleEdit=(itemId)=>{
            this.setState({
                item:getItem(itemId),
                editing: true
            })
            this.props.toggleEditingModal();
        }
        
        const handleSumbit=values=>{
            this.props.toggleEditingModal();
            if(this.state.editing)
                this.props.editItem(this.state.item.id,this.props.table.id,values);
            else
                this.props.addItem(this.props.table.id,values);
        }

        const handleAdd=()=>{
            this.setState({
                item:{},
                editing: false
            });
            this.props.toggleEditingModal();
        }
    
        // available: true
        if(this.props.table!==undefined)
            return(
                <>
                    <Modal isOpen={this.props.editingModalOpen} toggle={this.props.toggleEditingModal}>
                        <ModalHeader toggle={this.props.toggleEditingModal}>Edit item</ModalHeader>
                        <ModalBody>
                            <LocalForm onSubmit={values=>handleSumbit(values)}>
                                <Row className='form-group'>
                                    <Label className='py-auto my-auto' htmlFor='name' sm='3' id='nameLabel'>Name</Label>
                                    <Tooltip placement='left' toggle={()=>toggleTooltip('name')} isOpen={this.state.tooltips.name} target='nameLabel'>Choose a descriptive name</Tooltip>
                                    <Col sm='9'>
                                        <Control.text model='.name' id='name' name='name' className='form-control' value={this.state.item.name} onChange={(evt)=>this.setState({item: {...this.state.item,name: evt.target.value}})}
                                        validators={{
                                            required,
                                            maxLength: maxLength(25)
                                        }} />
                                        
                                        <Errors className='text-danger' model='.name' show='touched' component='li' messages={{
                                            required: 'Required',
                                            maxLength: 'Name can not be more than 25 characters'
                                        }} />
    
    
                                    </Col>
                                </Row>  
                                <Row className='form-group'>
                                    <Label className='py-auto my-auto' htmlFor='price' sm='3' id='priceLabel'>Price</Label>
                                    <Tooltip placement='left' toggle={()=>toggleTooltip('price')} isOpen={this.state.tooltips.price} target='priceLabel'>Price in JOD</Tooltip>
                                    <Col sm='9'>
                                        <Control.text model='.price' id='price' name='price' className='form-control'  value={this.state.item.price} onChange={(evt)=>this.setState({item: {...this.state.item,price: evt.target.value}})}
                                        validators={{
                                            required,
                                            isNumber,
                                            maxLength:maxLength(3)
                                        }} />
    
                                        <Errors className='text-danger' model='.price' show='touched' component='li' messages={{
                                            required: 'Required',
                                            maxLength: 'can not be more than 3 digits',
                                            isNumber: 'Must be a number'
                                        }}/>
                                    </Col>
                                </Row>  
                                <Row className='form-group'>
                                    <Label className='py-auto my-auto' htmlFor='file' sm='3' id='imageLabel'>Change Image</Label>
                                    <Tooltip placement='left' toggle={()=>toggleTooltip('image')} isOpen={this.state.tooltips.image} target='imageLabel'>{this.state.editing?'Upload a new image only if you want to change the original':'Upload a real picture for this item'}</Tooltip>
                                    <Col sm='9'>
                                        <Control.file model='.file' id='file' name='file' className='form-control-file'/>
                                    </Col>
                                </Row>
                                
                                <Row className='form-group'>
                                    <Label className='py-auto my-auto' htmlFor='description' sm='3' id='descriptionLabel'>Description</Label>
                                    <Tooltip placement='left' toggle={()=>toggleTooltip('description')} isOpen={this.state.tooltips.description} target='descriptionLabel'>Keep it short and honest</Tooltip>
                                    <Col sm='9'>
                                        <Control.textarea model='.description' id='description' name='description' className='form-control' rows='5'  value={this.state.item.description} onChange={(evt)=>this.setState({item: {...this.state.item,description: evt.target.value}})}
                                        validators={{
                                            maxLength: maxLength(115)
                                        }} />
                                        
                                        <Errors className='text-danger' model='.description' show='touched' component='li' messages={{
                                            maxLength: 'Can not exceed 115 characters'
                                        }} />
                                    </Col>
                                </Row>
                                <Button block color='warning' type='submit'>Save</Button>
                            </LocalForm>
                        </ModalBody>
                    </Modal>
                    <Container>
                        <h1 className='text-center my-5'>This is your table</h1>
                        <Row>
                            {this.props.table.items.map(item=>{
                                return(
                                    <Col xs='12' sm='12' md='6' lg='4' key={item.id} className='my-3' >
                                        <Card>
                                            <CardImg width='100%' top src={item.image} alt={item.name} image cap height='300px'/>
                                            <CardBody>
                                                <CardTitle className='font-weight-bold'>{item.name}</CardTitle>
                                                <CardSubtitle><Badge pill color='info'>{item.price} JOD</Badge></CardSubtitle>
                                                <CardText className='cardTextHeight'>{item.description}</CardText>
                                                <Button className={item.available? 'd-inline ml-auto mr-1': 'd-none'} color='success' size='sm' onClick={()=>handleEdit(item.id)}>Edit</Button>
                                                <Button className={item.available? 'd-inline': 'd-none'} color='danger' size='sm' onClick={()=>this.props.removeItem(item.id,this.props.table.id)}>Remove</Button>
                                            </CardBody>
                                                <Button className={item.available? 'd-none': 'd-block'} color='secondary' disabled block>Sold</Button>
                                        </Card>
                                    </Col>
                                )
                            })}
                            <Col xs='12' md='6' lg='4' className='my-3 align-self-center'>
                                <Button color='warning' outline block size='lg' onClick={handleAdd}><i className='fa fa-plus fa-lg' ></i> Add Item</Button>
                            </Col>
                        </Row>
                    </Container>
                </>
            )
        else
            return(
                <h1>Rent a table!</h1>
            )
    
    }
}

export default Sell;