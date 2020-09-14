import React,{useState,Component} from 'react';
import {Col,
    Row,
    Container,
    Carousel,
    CarouselControl,
    CarouselCaption,
    CarouselItem,
    Media,
    Button} from 'reactstrap';
import {Link} from 'react-router-dom';
      
class Bazaar extends Component{
    render(){
        return (
            <Container>
                {this.props.tables.map(table=>{
                    return(
                        <div key={table.id} className='my-5'>
                            <Row>
                                <Col xs='12' sm='4'>
                                <Media>
                                    <Media left href="#">
                                        <Media object src={table.ownerImage} alt={table.ownerName} className='mediaImg mr-1'/>
                                    </Media>
                                    <Media body>
                                        <Media heading>
                                        {table.ownerName}         
                                    </Media>
                                        {table.description}   
                                        <Media bottom>
                                            <Link className='nav-link' to={'/bazaar/'+table.id} onClick={()=>{document.documentElement.scrollTop = 0;}}>
                                                <Button color='warning' outline>Enter table</Button> 
                                            </Link>
                                        </Media>
                                    </Media>
                                </Media>
                                </Col>        
                                <Col xs='12' sm='8'>
                                    <Carousel
                                    activeIndex={this.props.activeIndex[table.id]}
                                    next={()=>this.props.carouselNext(table.items.length,table.id)}
                                    previous={()=>this.props.carouselPrev(table.items.length,table.id)} >
                                        {table.items.map(item=>{
                                            return(
                                                <CarouselItem onExiting={() => this.props.setAnimating(true,table.id)}
                                                onExited={() => this.props.setAnimating(false,table.id)}
                                                key={item.id} 
                                                className='carouselHeight'>
                                                    <img src={item.image} alt={item.name} className='w-100 h-100'/>
                                                    <CarouselCaption className='d-block' captionText={'JOD '+item.price} captionHeader={item.name}/>
                                                </CarouselItem>
                                            )
                                        })}
                                        <CarouselControl direction="prev" directionText="Previous" onClickHandler={()=>this.props.carouselPrev(table.items.length,table.id)} />
                                        <CarouselControl direction="next" directionText="Next" onClickHandler={()=>this.props.carouselNext(table.items.length,table.id)} />
                                    </Carousel>
                                </Col>
                            </Row>
                            <hr/>
                        </div>
                    )
                })}
            </Container>
        )
    
    }
}

export default Bazaar;

