import React,{Component} from 'react';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Profile from './Profile';
import Bazaar from './Bazaar';
import Sell from './Sell';
import Table from './Table';
import Buy from './Buy';

import {Switch,
    Redirect,
    Route,
    withRouter} from 'react-router-dom';

import {connect} from 'react-redux';
import {setAnimating,
        carouselNext,
        carouselPrev,
        startCarouselAnimating,
        startCarouselIndex} from '../redux/actionCreators'

const mapStateToProps=state=>({
    animating: state.carouselAnimating,
    activeIndex: state.carouselActiveIndex,
    users: state.users,
    tables: state.tables
})

const mapDispatchToProps=dispatch=>({
    setAnimating: (bool,index)=>dispatch(setAnimating(bool,index)),
    carouselNext: (length,index)=>dispatch(carouselNext(length,index)),
    carouselPrev: (length,index)=>dispatch(carouselPrev(length,index)),
    startCarouselAnimating: (length)=>dispatch(startCarouselAnimating(length)),
    startCarouselIndex: (length)=>dispatch(startCarouselIndex(length))
})

class Main extends Component{
    componentDidMount(){
        this.props.startCarouselAnimating(this.props.tables.length);
        this.props.startCarouselIndex(this.props.tables.length);
    }
    render(){
        const activeUser=this.props.users.find(user=>user.active);
        const ProfileWithId=({match})=><Profile user={this.props.users.find(user=>user.id===Number(match.params.userId))}/>
        const TableWithId=({match})=><Table table={this.props.tables.find(table=>table.id===Number(match.params.tableId))} />    
        return(
            <>
                <Header user={activeUser} />
                <Switch>
                    <Route path='/home'>
                        <Home/>
                    </Route>
                    <Route path='/profiles/:userId' component={ProfileWithId}/>
                    <Route path='/about'>
                        <About/>
                    </Route>
                    <Route path='/contact'>
                        <Contact/>
                    </Route>
                    <Route exact path='/bazaar'>
                        <Bazaar tables={this.props.tables} setAnimating={this.props.setAnimating}
                        carouselNext={this.props.carouselNext} carouselPrev={this.props.carouselPrev}
                        animating={this.props.animating} activeIndex={this.props.activeIndex} />
                    </Route>
                    <Route path='/sell'>
                        <Sell user={activeUser} table={this.props.tables.find(table=>table.id===activeUser.tableId)}/>
                    </Route>
                    <Route path='/bazaar/:tableId' component={TableWithId}/>
                    <Route path='/buy' component={Buy} />
                    <Redirect to='/home/'/>
                </Switch>
                <Footer/>
            </>
        );
    }
}



export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Main));




