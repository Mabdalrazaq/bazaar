import React,{useState} from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    Jumbotron,
    Container,
    Row,
    Col,
    Button
  } from 'reactstrap';

import {NavLink,Link} from 'react-router-dom';
  
function Header (props){
const [isNavOpen,setIsNavOpen]=useState(false);
const toggleNav=()=>setIsNavOpen(!isNavOpen);
return(
    <>
        <Navbar color='light' expand='sm' light fixed='top'>
            <NavbarBrand href='/home'>
                <img src='images/logo.png' alt='logo' width='120px' />
            </NavbarBrand>
            <NavbarToggler onClick={toggleNav}/>
            <Collapse isOpen={isNavOpen} navbar>
                <Nav className='mx-auto' navbar>
                    <NavItem>
                        <NavLink className='nav-link' to='/home'>
                            <span className='fa fa-home fa-lg'></span> Home
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='/about'>
                            <span className='fa fa-info fa-lg'></span> About
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='/contact'>
                            <span className='fa fa-id-card fa-lg'></span> Contact Us
                        </NavLink>
                    </NavItem>
                </Nav>
                <Nav className='ml-auto' navbar>
                    <NavItem>
                        <NavLink className='nav-link' to={'/profiles/'+props.user.id}>
                            <span className='fa fa-user fa-lg'></span> {props.user.name}
                        </NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
        <Jumbotron className='jubmotron fluid-jumbotron'>
            <Container>
                <Row className='align-items-center jumbotron-row'>
                    <Col xs='12' sm='4'>
                        <h1 className='font-weight-bold'>Bazaar</h1>
                        <p className='font-italic'>We merge the beauty of tradition with the flexibility of technology! </p>
                    </Col>
                    <Col xs='12' sm='4'>
                        <Link to='/bazaar' className='nav-link'>
                          <Button className='jumbButton' outline color='success' block ><span className='fa fa-shopping-cart fa-lg'></span> Go Buy</Button>
                        </Link>
                    </Col>
                    <Col xs='12' sm='4'>
                        <Link to='/sell' className='nav-link'>
                            <Button className='jumbButton' outline color='info' block ><span className='fa fa-dollar fa-lg'></span> Go Sell</Button>
                        </Link>
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    </>
)
}



export default Header;