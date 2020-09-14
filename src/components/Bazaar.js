import React,{useState} from 'react';
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
      
function Bazaar (props){
    const [activeIndex, setActiveIndex]=useState(0);
    const [animating,setAnimating]=useState(false);

    const next = (length) => {
        if (animating) return;
        const nextIndex = activeIndex === length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
      }
      const previous = (length) => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
      }
        return (
        <Container>
            {props.tables.map(table=>{
                return(
                    <div key={table.id}>
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
                                        <Link className='nav-link' to={'/bazaar/'+table.id}>
                                            <Button color='warning' outline>Enter table</Button> 
                                        </Link>
                                    </Media>
                                </Media>
                            </Media>
                            </Col>        
                            <Col xs='12' sm='8'>
                                <Carousel
                                activeIndex={activeIndex}
                                next={()=>next(table.items.length)}
                                previous={()=>previous(table.items.length)} >
                                    {table.items.map(item=>{
                                        return(
                                            <CarouselItem onExiting={() => setAnimating(true)}
                                            onExited={() => setAnimating(false)}
                                            key={item.id} 
                                            className='carouselHeight'>
                                                <img src={item.image} alt={item.name} className='w-100 h-100'/>
                                                <CarouselCaption className='d-block' captionText={'JOD '+item.price} captionHeader={item.name}/>
                                                <p>hellofdssds</p>
                                            </CarouselItem>
                                        )
                                    })}
                                    <CarouselControl direction="prev" directionText="Previous" onClickHandler={()=>previous(props.tables[0].items.length)} />
                                    <CarouselControl direction="next" directionText="Next" onClickHandler={()=>next(props.tables[0].items.length)} />
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

export default Bazaar;

