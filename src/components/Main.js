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
import {user, tables} from '../db/db';
import {Switch,
    Redirect,
    Route,
    withRouter} from 'react-router-dom';

import {connect} from 'react-redux';
import {setAnimating,carouselNext,carouselPrev} from '../redux/actionCreators'


const table=tables.find(table=>table.id=user.info.tableInfo.tableId);

const mapStateToProps=state=>({
    animating: state.carouselAnimating,
    activeIndex: state.carouselActiveIndex
})

const mapDispatchToProps=dispatch=>({
    setAnimating: (bool,index)=>dispatch(setAnimating(bool,index)),
    carouselNext: (length,index)=>dispatch(carouselNext(length,index)),
    carouselPrev: (length,index)=>dispatch(carouselPrev(length,index))
})

class Main extends Component{

    render(){

        return(
            <>
                <Header user={user} />
                <Switch>
                    <Route path='/home'>
                        <Home/>
                    </Route>
                    <Route path='/profiles/:userId' component={Profile}/>
                    <Route path='/about'>
                        <About/>
                    </Route>
                    <Route path='/contact'>
                        <Contact/>
                    </Route>
                    <Route exact path='/bazaar'>
                        <Bazaar tables={tables} setAnimating={this.props.setAnimating}
                        carouselNext={this.props.carouselNext} carouselPrev={this.props.carouselPrev}
                        animating={this.props.animating} activeIndex={this.props.activeIndex} />
                    </Route>
                    <Route path='/sell'>
                        <Sell user={user} table={table}/>
                    </Route>
                    <Route path='/bazaar/:tableId' component={Table}/>
                    <Redirect to='/home/'/>
                </Switch>
                <Footer/>
            </>
        );
    }
}




export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Main));




