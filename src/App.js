/* eslint-disable */

import logo from './logo.svg';
import { Button,Navbar,Container,Nav,NavDropdown } from 'react-bootstrap';
import './App.css';
import React, { useContext, useState } from 'react';
import Data from './data.js';
import {Link,Route,Switch} from 'react-router-dom';
import Detail from './Detail.js';
import axios from 'axios';
import Cart from './Cart.js';
// function More(more){
//   let tmp=[more];
//   tmp=[...shoes];
//   shoesChange(tmp);
// }

let 재고context= React.createContext();

function App() {

  let [shoes,shoesChange]=useState(Data);
  let [재고,재고변경]=useState([10,11,12]);

  return (
    <div className="App">
     <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">Shoes Shop</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link as={Link} to='/'>Home</Nav.Link>
        <Nav.Link as={Link} to='/detail'>Detail</Nav.Link>
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
    
    {/* <재고.context.Provider value={재고}>  */}
    {/* 이제 범위내에서 재고 데이터는 공유가능 */}
    
    
    <div className='row'>
    {
      shoes.map(function(a,i){
        return(
          <Card shoes={shoes[i]} i={i} key={i}/>      
        )
      })
    }
      
   
    </div>
    {/* </재고.context.Provider> */}
    <button className='btn btn-primary' onClick={()=>{

      // 로딩중이라는 UI

      axios.get('https://codingapple1.github.io/shop/data2.json')
      .then((result)=>{
        shoesChange([...shoes,...result.data]);//deep copy ...은 괄호 벗겨줌 copy array 
      })//성공시
      .catch(()=>{ })//실패시
    }}>See More</button>
</div>
</Route>

<Route path="/detail/:id">

    <Detail shoes={shoes} 재고={재고} 재고변경={재고변경}/>
</Route>


<Route path="/cart">
    <Cart />
</Route>
<Route path="/:id">
    <div>아무거나</div>
</Route>

</Switch>
    </div>



  );


  function Card(props){
    
    let 재고 = useContext(재고context);//범위입력 , 

    return(
      <div className='col-md-4'>
      <img src={'https://codingapple1.github.io/shop/shoes'+(props.i+1)+'.jpg'} className='bg-img'/>
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.content} & {props.shoes.price} </p>
      {재고}
      </div>
    );
  }
}

export default App;
