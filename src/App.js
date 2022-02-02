import logo from './logo.svg';
import { Button,Navbar,Container,Nav,NavDropdown } from 'react-bootstrap';
import './App.css';
import { useState } from 'react';
import Data from './data.js';

function App() {

  let [shoes,shoesChange]=useState(Data);

  return (
    <div className="App">
     <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">Link</Nav.Link>
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
          <Card shoes={shoes[i]} i={i}/>      
        )
      })
    }
    
    {/* <Card/>
      <div className='col-md-4'>
      <img src="https://codingapple1.github.io/shop/shoes2.jpg" className='bg-img'/>
      <h4>상품명</h4>
      <p>상품설명 & 가격 </p>
      </div>
      <div className='col-md-4'>
      <img src="https://codingapple1.github.io/shop/shoes3.jpg" className='bg-img'/>
      <h4>상품명</h4>
      <p>상품설명 & 가격 </p>
      </div> */}
    </div>
</div>

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
