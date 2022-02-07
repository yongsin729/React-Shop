import React,{Suspense, useEffect, useState} from 'react';
import { useHistory,useParams } from 'react-router-dom/cjs/react-router-dom.min';
import styled from 'styled-components';
import { Button,Navbar,Container,Nav,NavDropdown } from 'react-bootstrap';
import './Detail.scss';
import {CSSTransition} from "react-transition-group";
import { connect } from 'react-redux';

let box1=styled.div`
    padding:20px
`;
let 제목=styled.h4`
    font-size:25px;
`;

function Detail(props){

    
    let [modal,modal변경]=useState(true);
    let {id}=useParams();
    let [tab,tabChange]=useState(0);
    let [스위치,스위치변경]=useState(false);
    let [amount,amountChange]=useState(0);
    let 찾은상품 = props.shoes.find(function(상품){
        return 상품.id==id
    });
    
    useEffect(()=>{
        let timer=setTimeout(()=>{
            modal변경(false);
            return ()=>{
                clearTimeout(timer);//detail 없어질시 타이머 해제 
            }
        },2000);//이렇게만 하면 업데이트시 실행되므로 버그 발생 가능 
        
    },[modal]);//실행조건
    let history=useHistory();
   
    return (
        <div className="container">
            <box1>
                <제목 className='red'>Detail</제목>
            </box1>
           
        {
            modal===true ?
            <Modal></Modal>
            : null
        }
      <div className="row">
        <div className="col-md-6">
          <img src={"https://codingapple1.github.io/shop/shoes"+(찾은상품.id+1)+".jpg"} width="100%" />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{찾은상품.title}</h4>
          <p>{찾은상품.content}</p>
          <p>{찾은상품.price}원</p>

        {/* <Info 재고={props.재고} id={id}/> */}
        <p>수량 : <input type="number"  min="1" max="5"className='input-amount' onChange={(e)=>{
            amountChange(e.target.value);
            
        }}></input></p>
          <button className="btn btn-danger" onClick={()=>{
            //   props.재고변경([9,10,10]);
              props.dispatch({type:'항목추가',payload:{id:찾은상품.id,name:찾은상품.title,quan:amount}})
              history.push('/cart');
          }}>주문하기</button> 
          &nbsp;
          <button className="btn btn-danger" onClick={()=>{
              history.push('/')
          }}>뒤로가기</button> 
        </div>
      </div>

      <Nav className="mt-5"variant="tabs" defaultActiveKey="link-0">
  <Nav.Item>
    <Nav.Link eventKey="link-0" onClick={()=>{스위치변경(false); tabChange(0)}}>Detail</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-1" onClick={()=>{스위치변경(false); tabChange(1)}}>Review</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-2" onClick={()=>{스위치변경(false); tabChange(2)}}>Option 2</Nav.Link>
  </Nav.Item>
</Nav>
      
     <CSSTransition in={스위치} classNames="ani" timeout={500}>
          <TabContent tab={tab} 스위치변경={스위치변경}/>
     </CSSTransition>
</div> 
    )

    function TabContent(props){
        
        useEffect(()=>{
            props.스위치변경(true);
        })

        if(props.tab===0){
            return (
              <div className='tab-text'>
                <ol >
                  <li>Breathable Upper Vamp</li>
                  <li>Ankle Protection Top-Line</li>
                  <li> Stability & Soft Insole</li>
                  <li> Stretchy & Permeability Midsole</li>
                  <li>High Elastic & Shock Absorption Outsole</li>
                  <li> Non Slip & Durable Rubber Patch</li>
                </ol>
              </div>
            );
        }else if(props.tab===1){
            return (
                <div className='tab-text'>
                    <h4>제목</h4>
                    <p>내용 </p>
                </div>
            )
        }else{
            return <div className='tab-text'>Temporary</div>
        }
    }
    function Modal(){
        return (
            <div className='my-alert-yellow'>
            <p>재고가 얼마 남지 않았습니다</p>
        </div>
        )
    }
    function Info(props) {
        return(
            <p>재고 : {props.재고[props.id]}</p>
        )
    }
}

function 함수명(state){
    return{
        state : state.reducer

    }
}

export default connect(함수명)(Detail)