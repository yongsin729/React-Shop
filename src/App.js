/* eslint-disable */

import logo from './logo.svg';
import { Button,Navbar,Container,Nav,NavDropdown } from 'react-bootstrap';
import './App.css';
import { useState } from 'react';
import Data from './data.js';
import {Link,Route,Switch} from 'react-router-dom';
import Detail from './Detail.js';

function App() {

  let [shoes,shoesChange]=useState(Data);

  return (
    <div className="App">
     <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">Shoes Shop</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link><Link to='/'>Home</Link></Nav.Link>
        <Nav.Link><Link to='/detail'>Detail</Link></Nav.Link>
        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>




<Switch>

<Route exact path="/">
  
<div className='bg'>
  <div className='bg-font'>
<h1>20% Sale</h1>
    <p>Okay yes, it’s a little chilly. And sure, we’d all love to just wrap ourselves in our comforters and call it a day. But just because the weather’s turning, doesn’t mean your style has to go into hibernation too. Behold, the cutest, coziest, and cuddliest cold-weather pieces to keep you wrapped up in style and warmth (without resorting to wearing your bedspread).
    
</p>
<Button variant="outline-primary">Primary</Button>{' '}
    </div>
</div>

<div className='container main'>
    <div className='row'>
    {
      shoes.map(function(a,i){
        return(
          <Card shoes={shoes[i]} i={i} key={i}/>      
        )
      })
    }
      
   
    </div>
</div>
</Route>

<Route path="/detail/:id">

    <Detail shoes={shoes}/>
</Route>

<Route path="/:id">
    <div>아무거나</div>
</Route>

</Switch>
    </div>



  );


  function Card(props){
    return(
      <div className='col-md-4'>
      <img src={'https://codingapple1.github.io/shop/shoes'+(props.i+1)+'.jpg'} className='bg-img'/>
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.content} & {props.shoes.price} </p>
      </div>
    );
  }
}

export default App;
