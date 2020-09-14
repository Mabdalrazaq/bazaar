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

import {Switch,
    Redirect,
    Route,
    withRouter} from 'react-router-dom';

import {connect} from 'react-redux';
import {setAnimating,
        carouselNext,
        carouselPrev,
        startCarouselAnimating,
        startCarouselIndex,
        sellItem,
        prepareItem,
        toggleConfirmModal,
        toggleConfirmedModal,
        editItem,
        removeItem,
        toggleEditingModal,
        addItem} from '../redux/actionCreators'

const mapStateToProps=state=>({
    animating: state.carouselAnimating,
    activeIndex: state.carouselActiveIndex,
    users: state.users,
    tables: state.tables,
    confirmModalOpen: state.confirmModalOpen,
    confirmedModalOpen: state.confirmedModalOpen,
    itemBeingProcessed: state.itemBeingProcessed,
    editingModalOpen: state.editingModalOpenm,
    items: state.items
})

const mapDispatchToProps=dispatch=>({
    setAnimating: (bool,index)=>dispatch(setAnimating(bool,index)),
    carouselNext: (length,index)=>dispatch(carouselNext(length,index)),
    carouselPrev: (length,index)=>dispatch(carouselPrev(length,index)),
    startCarouselAnimating: (length)=>dispatch(startCarouselAnimating(length)),
    startCarouselIndex: (length)=>dispatch(startCarouselIndex(length)),
    sellItem: id=>dispatch(sellItem(id)),
    toggleConfirmModal: ()=>dispatch(toggleConfirmModal()),
    toggleConfirmedModal: ()=>dispatch(toggleConfirmedModal()),
    prepareItem: id=>dispatch(prepareItem(id)),
    editItem: (id,values)=>dispatch(editItem(id,values)),
    removeItem: id=>dispatch(removeItem(id)),
    toggleEditingModal: ()=>dispatch(toggleEditingModal()),
    addItem: (tableId,values)=>dispatch(addItem(tableId,values))
})

class Main extends Component{
    componentDidMount(){
        this.props.startCarouselAnimating(this.props.tables.length);
        this.props.startCarouselIndex(this.props.tables.length);
    }
    render(){
        const activeUser=this.props.users.find(user=>user.active);
        const ProfileWithId=({match})=><Profile user={this.props.users.find(user=>user.id===Number(match.params.userId))}/>
        const TableWithId=({match})=><Table table={this.props.tables.find(table=>table.id===Number(match.params.tableId))} 
        sellItem={this.props.sellItem} 
        toggleConfirmModal={this.props.toggleConfirmModal}
        toggleConfirmedModal={this.props.toggleConfirmedModal}
        prepareItem={this.props.prepareItem}
        confirmModalOpen={this.props.confirmModalOpen}
        confirmedModalOpen={this.props.confirmedModalOpen}
        itemBeingProcessed={this.props.itemBeingProcessed}
        items={this.props.items} />    
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
                        animating={this.props.animating} activeIndex={this.props.activeIndex} items={this.props.items} />
                    </Route>
                    <Route path='/sell'>
                        <Sell user={activeUser} table={this.props.tables.find(table=>table.id===activeUser.tableId)}
                        sellItem={this.props.sellItem} removeItem={this.props.removeItem} editItem={this.props.editItem}
                        editingModalOpen={this.props.editingModalOpen} toggleEditingModal={this.props.toggleEditingModal}
                         addItem={this.props.addItem} items={this.props.items}  />
                    </Route>
                    <Route path='/bazaar/:tableId' component={TableWithId}/>
                    <Redirect to='/home/'/>
                </Switch>
                <Footer/>
            </>
        );
    }
}



export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Main));



