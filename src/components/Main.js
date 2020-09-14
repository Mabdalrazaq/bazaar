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
    Route} from 'react-router-dom';

const table=tables.find(table=>table.id=user.info.tableInfo.tableId);

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
                        <Bazaar tables={tables}/>
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




export default Main;




