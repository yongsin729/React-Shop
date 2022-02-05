import React,{useEffect, useState} from 'react';
import { useHistory,useParams } from 'react-router-dom/cjs/react-router-dom.min';
import styled from 'styled-components';
import { Button,Navbar,Container,Nav,NavDropdown } from 'react-bootstrap';
import './Detail.scss';

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
          <p>{찾은상품.price}</p>

        <Info 재고={props.재고} id={id}/>
          <button className="btn btn-danger" onClick={()=>{
              props.재고변경([9,10,10]);
          }}>주문하기</button> 
          &nbsp;
          <button className="btn btn-danger" onClick={()=>{
              history.push('/')
          }}>뒤로가기</button> 
        </div>
      </div>

      <Nav className="mt-5"variant="tabs" defaultActiveKey="link-0">
  <Nav.Item>
    <Nav.Link eventKey="link-0" onClick={()=>{tabChange(0)}}>Active</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-1" onClick={()=>{tabChange(1)}}>Option 1</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-2" onClick={()=>{tabChange(2)}}>Option 2</Nav.Link>
  </Nav.Item>
</Nav>
      
      
          <TabContent tab={tab}/>
</div> 
    )

    function TabContent(props){
        
        if(props.tab===0){
            return <div>0번째내용</div>
        }else if(props.tab===1){
            return <div>1번째내용</div>
        }else{
            return <div>2번째 내용 </div>
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

export default Detail;