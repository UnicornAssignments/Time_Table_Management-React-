import React, { Component } from 'react'

import {Button,Navbar,Form,FormControl,Nav} from 'react-bootstrap'
import {BrowserRouter as Router,Route,Switch,Link,NavLink} from 'react-router-dom'

import Homebody from './HomeBody';
import Login from '../Login/Login';
import Signup from '../Signup/Signup';


export class navBar extends Component {
    render() {
        return (
            <Router>
            <div >

     <Navbar bg="dark" variant="dark">
    <Navbar.Brand href='/'>Mind Tech</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link ><NavLink activeStyle={{color:'green'}} exact to='/'>Home</NavLink></Nav.Link>
      <Nav.Link ><NavLink activeStyle={{color:'green'}} exact to='/signIn'>Login</NavLink></Nav.Link>
      <Nav.Link ><NavLink activeStyle={{color:'green'}} exact to='/signUp'>Sign Up</NavLink ></Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form>
    </Navbar>
  

    <Switch>
      <Route exact path="/" component={Homebody}/>
      <Route exact path='/signIn' component={Login}/>
      <Route exact path='/signUp' component={Signup}/>
    </Switch>


    </div>
    </Router>
        )
    }
}

export default navBar
